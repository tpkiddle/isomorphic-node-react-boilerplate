'use strict';

const React = require('react');
const Basic = require('./layouts/Basic');

class Home extends React.Component {
  render() {
    return (
      <div className="clearfix">
      </div>
    );
  }
}

Home.propTypes = {
  messages: React.PropTypes.array,
  user: React.PropTypes.object,
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string
};

module.exports = Home;
