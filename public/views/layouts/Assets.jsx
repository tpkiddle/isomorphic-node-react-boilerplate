'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Assets extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {

    return (
      <div>{this.props.children}</div>
    );
  }
}

Assets.propTypes = {
  children: PropTypes.node.isRequired
};

module.exports = Assets;
