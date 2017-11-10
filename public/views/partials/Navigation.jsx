'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const Router = require('react-router');
const Assets = require('../layouts/Assets');
const FlashMessages = require('../partials/FlashMessages');

class Navigation extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {
    const navItems = [
      { title: 'Home', path: '/'},
      { title: 'Broken 404', path: '/dead_link'},
      { title: 'Contact', path: '/contact'}
    ];

    return (
      <nav>
        <ul>
          {navItems.map(function(item) {
            return (
              <li key={item.path}>
                <Router.Link to={item.path}>
                  {item.title}
                </Router.Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  messages: PropTypes.array,
  user: PropTypes.object
};

module.exports = Navigation;
