'use strict';

const paths = require('../../../app/config/paths');

describe('paths configuration', function () {

  it('should return an object containing path mappings to all core directories', function () {

    const directories = [
      'base', 'public', 'config', 'app', 'models',
      'views', 'controllers', 'favicon', 'sass', 'css'
    ];

    directories.forEach(function (dir) {
      (typeof paths[dir]).should.not.equal('undefined');
    });
  });
});