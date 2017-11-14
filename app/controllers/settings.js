'use strict';

/**
 * Controller for the home page.
 */

const router = require('express').Router();
const LoggerService = require('../services/LoggerService');

/**
 * GET request to render the Home template.
 */
router.get('/settings', function(req, res, next) {
  res.render(req.url, {
    messages: req.flash('messages'),
    title: 'Settings'
  });
});

module.exports = router;
