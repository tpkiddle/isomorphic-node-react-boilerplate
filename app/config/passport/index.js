/**
 * Main entry point for the passport
 * configuration such as strategies
 */

module.exports = function() {
  require('./serialize')();
  require('./local-login')();
  require('./local-registration')();
};