/**
 * passport strategy for local registration i.e. registering
 * users with an email and password
 */

const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      User = require('../../models/User');

const crypto = require('crypto');
const base64url = require('base64url');

module.exports = function() {
  passport.use('local-registration', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, done) {

    process.nextTick(function() {
      const body = req.body;

      if (req.user) {

        /**
         * If for some reason the user trys to register
         * whilst already logged in throw an error.
         */

        return done(new Error('You are already registered and logged in.'));

      } else {


        if (!body.terms) {

          /**
           * If the form is submitted without the terms
           * being agreed to process the registration.
           */

          return done(null, false, req.flash('messages', {
            body: 'Signup failed. You must agree to the terms and conditions to use the service.',
            type: 'warning',
            title: 'Signup'
          }));
        }

        if (!body.username || !body.email || !body.password) {

          /**
           * If the form is submitted without the required
           * fields don't process the registration.
           */

          return done(null, false, req.flash('messages', {
            body: 'Signup failed. Please fill out all of the fields below.',
            type: 'warning',
            title: 'Signup'
          }));
        } else {

          if (body.username.length < 4) {

            return done(null, false, req.flash('messages', {
              body: 'Signup failed. Your username must be at least 4 characters long.',
              type: 'warning',
              title: 'Signup'
            }));
          }


          const usernameLc = body.username.toLowerCase();
          const emailLc = email.toLowerCase();

          User.findOne({ $or: [{ 'auth.email': emailLc }, { 'auth.username': usernameLc }] }, function(error, exists) {
            if (error) {
              return done(error);
            }

            if (exists) {

              return done(null, false, req.flash('messages', {
                body: 'Signup failed. The email address or username is already in use.',
                type: 'warning',
                title: 'Signup'
              }));
            } else {

              /**
               * No user exists with the supplied email address so
               * lets create a new one and save to the DB.
               */

              const user = new User();

              /**
               * Store authentication the values in the user auth object
               */
              user.auth.email = emailLc;
              user.auth.username = usernameLc;
              user.auth.password = user.generateHash(password);
              user.auth.verification = {
                token: base64url(crypto.randomBytes(20)),
                verified: false
              };

              /**
               * Store the values in the users profile object.
               */
              user.profile = {
                email: emailLc,
                username: usernameLc
              };

              user.save(function(error) {
                if (error) {
                  throw error;
                }

                return done(null, user);
              });
            }

          });
        }


      }
    });
  }));
};