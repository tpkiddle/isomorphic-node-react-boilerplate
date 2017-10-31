'use strict';

/**
 * Exports an object containing common app paths
 */

const path = require('path'),
      base = path.join(__dirname, '..', '..'),
      assets = path.join(base, 'public'),
      app = path.join(base, 'app');

module.exports = {
  base: base,
  public: assets,
  app: app,
  config: path.join(app, 'config'),
  models: path.join(app, 'models'),
  // Server-side only views
  // views: path.join(app, 'views'),
  views: path.join(assets, 'views'),
  controllers: path.join(app, 'controllers'),
  favicon: path.join(assets, 'images', 'favicons', 'favicon.ico'),
  sass: path.join(assets, 'scss'),
  css: path.join(assets, 'css')
};
