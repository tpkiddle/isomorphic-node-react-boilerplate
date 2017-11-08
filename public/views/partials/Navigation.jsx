'use strict';

const React = require('react');
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
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string,
  messages: React.PropTypes.array,
  user: React.PropTypes.object
};

module.exports = Navigation;
