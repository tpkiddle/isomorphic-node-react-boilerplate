'use strict';

const React = require('react');

class ErrorFiveHundred extends React.Component {
  renderErrorMessage() {
    if(this.props.debugMode) {
      return (<p>{this.props.errorMessage}</p>);
    }
  }
  render() {
    return (
      <div className="clearfix">
        <h1>Internal Server Error (500)</h1>
        {this.renderErrorMessage()}
      </div>
    );
  }
}

ErrorFiveHundred.propTypes = {
  debugMode: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string.isRequired
};

module.exports = ErrorFiveHundred;
