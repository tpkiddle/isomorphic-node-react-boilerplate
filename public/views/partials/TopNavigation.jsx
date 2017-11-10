'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const Assets = require('../layouts/Assets');
const FlashMessages = require('../partials/FlashMessages');

class TopNavigation extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {
    const navItems = [
      { title: 'Home', path: '/'},
      { title: 'Contact', path: '/contact'},
      { title: 'Settings', path: '/settings'}
    ];

    return (
      <div className="header">
        <nav>
          <a href="/" title="Home" className="logo">
            <img src="/images/ripple-logo-color.png" alt="Ripple triskelion" />
          </a>
          <ul className="list-unstyled list-inline">
            {navItems.map(function(item) {
              return (
                <li key={item.path}>
                  <a href={item.path}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <span className="currency-choice">
            Currency:
            <span className="currency-choice__value"> {this.props.defaults.currency}</span>
          </span>
        </nav>
      </div>
    );
  }
}

TopNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  messages: PropTypes.array,
  user: PropTypes.object
};

module.exports = TopNavigation;
