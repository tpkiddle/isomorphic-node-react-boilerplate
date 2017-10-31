'use strict';

const React = require('react');

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
  children: React.PropTypes.node.isRequired
};

module.exports = Assets;