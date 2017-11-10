'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Home extends React.Component {

  render() {
    return (
      <div className="clearfix">
      </div>
    );
  }
}

Home.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.object,
  title: PropTypes.string.isRequired,
  path: PropTypes.string
};

module.exports = Home;
