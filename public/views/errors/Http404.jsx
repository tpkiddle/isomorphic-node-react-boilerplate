'use strict';

const React = require('react');
const Basic = require('../layouts/Basic');

class Http404 extends React.Component {
  render() {
    return (
      <Basic title="Error 404" path={this.props.path}>
        <h1>Page Not Found (404)</h1>
        <p>Sorry, but the page that you requested could not be found.</p>
      </Basic>
    );
  }
}

Http404.propTypes = {};

module.exports = Http404;
