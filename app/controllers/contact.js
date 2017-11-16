'use strict'

/**
 * Controller for the home page.
 */

const router = require('express').Router()

/**
 * GET request to render the Home template.
 */
router.get('/contact', function(req, res) {
  res.render(req.url, {
    messages: req.flash('messages'),
    title: 'Contact'
  })
})

module.exports = router
