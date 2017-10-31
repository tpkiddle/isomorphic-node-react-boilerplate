'use strict';

const React = require('react');
const Assets = require('../layouts/Assets');
const FlashMessages = require('../partials/FlashMessages');
const Navigation = require('../partials/Navigation');

class Basic extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {

    return (
      <html className="app">
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="app, web app, responsive, admin dashboard, admin, flat, flat ui, ui kit, off screen nav" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <title dangerouslySetInnerHTML={{__html: `${this.props.title} | Node React Boilerplate`}} />
          <link rel="stylesheet" type="text/css" href="/css/main.css" />
        </head>
        <body>
          <div className="container container--main">
            <div className="main">
              <h1>{this.props.title}</h1>
              <Navigation path={this.props.path}  title={this.props.title}/>
              {this.props.children}
            </div>
          </div>
          <Assets>
            <script src='/bundle.js'></script>
          </Assets>
        </body>
      </html>
    );
  }
}

Basic.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  path: React.PropTypes.string,
  messages: React.PropTypes.array,
  user: React.PropTypes.object
};

module.exports = Basic;
