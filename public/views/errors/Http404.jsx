'use strict';

const React = require('react');
const Main = require('../layouts/Main');

class Http404 extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <p>Sorry, but the page that you requested could not be found.</p>
      </div>
    );
  }
}

Http404.propTypes = {};

module.exports = Http404;
