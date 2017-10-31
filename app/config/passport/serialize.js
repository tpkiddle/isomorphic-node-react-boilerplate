/**
 * Serialize and deserialize methods for
 * passport strategies
 */

const passport = require('passport'),
      User = require('../../models/User');

module.exports = function() {

  /**
   * Used to deserialize the user
   */
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  /**
   * Used to serialize the user for the session
   */
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
};
