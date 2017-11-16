'use strict'

/**
 * Passport strategy for local login i.e. loging
 * users in via username and password
 */

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../models/User')


module.exports = function() {
  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, username, password, done) {

    const userQuery = {
      'auth.username': username.toLowerCase()
    }

    process.nextTick(function() {
      User.findOne(userQuery, function(err, user) {

        /**
         * When the user posts the login query the database
         * for a user with the given username address.
         */

        if (err) {
          return done(err)
        }

        if (!user) {

          /**
           * No user exists in the DB with the given username address.
           */

          return done(null, false, req.flash('messages', {
            body: 'Login failed. Please enter valid details and try again.',
            type: 'warning',
            title: 'Authentication'
          }))
        }

        if (user.validPassword(password)) {
          if (user.auth.verification.verified) {
            if (user.auth.active) {

              /**
               * The user has a valid password and is active return the user and
               * allow Passport JS to redirect to the successRedirect path.
               */

              const update = {
                $set: {lastLogin: new Date()},
                $inc: {loginCount: 1}
              }

              User.findByIdAndUpdate(user._id, update, function() {

                /**
                 * Before we call done, we update the users login count
                 * and set the lastLogin date to the current date/time
                 */

                return done(null, user, req.flash('messages', {
                  body: 'Login success. Welcome back.',
                  type: 'success',
                  title: 'Authentication'
                }))
              })


            } else {

              /**
               * The user has a valid password but is inactive, therefore we
               * block access to the site. An admin will likely need to
               * re-active the user.
               */

              const accountSuspendedMessage = `Login failed. Your account has
                been suspendedPlease contact the site owner.`

              return done(null, false, req.flash('messages', {
                body: accountSuspendedMessage,
                type: 'danger',
                title: 'Authentication'
              }))
            }
          } else {

            /**
             * User has not verified their username account
             */
            const unVerifiedLoginMessage = `Login failed. Please verify your
                  username account by clicking the link the in verification
                  username sent to your username address and try again.`

            return done(null, false, req.flash('messages', {
              body: unVerifiedLoginMessage,
              type: 'danger',
              title: 'Authentication'
            }))
          }
        } else {

          /**
           * The password entered for this user is incorrect.
           */

          return done(null, false, req.flash('messages', {
            body: 'Login failed. Please enter valid details and try again.',
            type: 'danger',
            title: 'Authentication'
          }))
        }

        return false
      })

      return false
    })
  }))
}
