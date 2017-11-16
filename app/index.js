'use strict'

/**
 * module dependencies
 */
const express = require('express')
const favicon = require('serve-favicon')
const sassMiddleware = require('node-sass-middleware')
const session = require('express-session')
const RedisSessionStore = require('connect-redis')(session)
const autoIncrement = require('mongoose-auto-increment')
const mongoose = require('mongoose')
const ReactEngine = require('react-engine')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('connect-flash')
const logger = require('morgan')
const path = require('path')
const fs = require('fs')

/**
 * Utilities
 */
const paths = require('./config/paths')
const isDevelopment = process.env.NODE_ENV !== 'production'

/**
 * Bootstrap the app
 */
const app = express()

/**
 * Allow parsing of JSX files
 */
// const babelRegister = require('babel-register')({
//   presets: ['es2015', 'react']
// })

/**
 * View engine setup
 */
const routes = require('../public/routes.jsx')

app.engine('.jsx', ReactEngine.server.create({
  routes: routes,
  routesFilePath: path.join(__dirname, '../public/routes.jsx'),
  performanceCollector: function(stats) {
    console.log(stats)
  }
}))

app.set('views', paths.views)
app.set('view engine', 'jsx')
app.set('view', ReactEngine.expressView)

/**
* request middleware
*/
app.use(favicon(paths.favicon))

app.use(logger(isDevelopment ? 'dev' : 'common'))

const jsonParser = bodyParser.json({limit: 1024 * 1024 * 20})
const urlencodedParser = bodyParser.urlencoded({
  extended: true, limit: 1024 * 1024 * 20
})

app.use(jsonParser)
app.use(urlencodedParser)

app.use(
  session({
    store: new RedisSessionStore({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      logErrors: true
    }),
    cookie: {
      maxAge: parseInt(process.env.SESSION_COOKIE_MAX_AGE, 10)
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

/**
 * Require passport entrypoint to load strategies.
 * Could this handeled in a nicer way?
 */
require('./config/passport')()

/**
 * Connect to Mongo DB server
 */
const dbHost = `${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`
const connectionUri = `mongodb://${dbHost}/${process.env.MONGO_DATABASE_NAME}`
const connection = mongoose.connect(connectionUri)

mongoose.Promise = global.Promise

/**
 * Initialise the auto-increment plugin
 */
autoIncrement.initialize(connection)

/**
 * Automatically compile sass to /public/css/app.css
 */
app.use('/css', sassMiddleware({
  src: paths.sass,
  dest: paths.css,
  outputStyle: 'compressed',
  sourceMap: true,
  debug: isDevelopment
}))

app.use(express.static(paths.public))

/**
 * Add common variables to all routes
 */
app.use(function(req, res, next) {
  res.locals.user = req.user
  res.locals.path = req.path
  res.locals.messages = req.flash('messages')
  res.locals.defaults = {currency: 'USD'}

  return next()
})

/**
 * Auto-load all non order dependent controllers
 */
fs.readdirSync(paths.controllers).forEach(function(file) {

  /*
   * Files denoted with __. at the beginning are
   * considered to be order dependent and will be
   * loaded manualy below or above with
   * app.use('/', require(path.join(paths.controllers, '__.profile.js')))
   */

  if (!file.startsWith('__.')) {
    app.use('/', require(path.join(paths.controllers, file)))
  }
})

/**
 * Catch non-matching routes and forward to error handler
 */
app.use(function(req, res) {
  res.status(404).render(req.url, {
    messages: req.flash('messages'),
    title: 'Page Not Found (404)'
  })
})

/**
 * Error handler (prints stack trace in development and staging)
 */
app.use(function(err, req, res) {

  const env = process.env.NODE_ENV
  const debugMode = (env === 'development' || env === 'staging')

  res.status(500).render('errors/Http500', {
    debugMode: debugMode,
    errorMessage: err.message
  })
})

module.exports = app
