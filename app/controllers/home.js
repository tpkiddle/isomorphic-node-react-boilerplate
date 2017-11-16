'use strict'

/**
 * Controller for the home page.
 */

const router = require('express').Router()

/**
 * GET request to render the Home template.
 */
router.get('/', function(req, res) {
  res.render(req.url, {
    messages: req.flash('messages'),
    title: 'Welcome home'
  })
})

module.exports = router
