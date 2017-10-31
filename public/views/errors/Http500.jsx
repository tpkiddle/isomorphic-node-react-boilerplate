'use strict';

const React = require('react');
const Basic = require('../layouts/Basic');

class ErrorFiveHundred extends React.Component {
  renderErrorMessage() {
    if(this.props.debugEnabled) {
      return (<p>{this.props.errorMessage}</p>);
    }
  }
  render() {
    return (
      <Basic title="Error 500" path={this.props.path}>
        <h1>Internal Server Error (500)</h1>
        {this.renderErrorMessage()}
      </Basic>
    );
  }
}

ErrorFiveHundred.propTypes = {
  debugEnabled: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string.isRequired
};

module.exports = ErrorFiveHundred;
