'use strict';

const React = require('react');
const PropTypes = require('prop-types');
const Assets = require('../layouts/Assets');
const FlashMessages = require('../partials/FlashMessages');
const TopNavigation = require('../partials/TopNavigation');

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = props;
    this.setDefaults = this.setDefaults.bind(this);
  }

  componentDidMount() {
    const defaults = localStorage.getItem('defaults');

    /**
     * If default settings are found in local storage
     * lets overide the generic defaults sent
     * from the server with those.
     *
     * TO DO: Rename to preferences.
     */

    if (defaults) {
      this.setState({
        defaults: JSON.parse(defaults)
      });
    }
  }

  setDefaults(defaults) {

    /**
     * Updates both the app state and local
     * storage defaults object.
     */

    this.setState({
      defaults: defaults
    }, function() {
      localStorage.setItem('defaults', JSON.stringify(this.state.defaults))
    });
  }

  render() {
    const Component = this.props.children.props.route.component;

    return (
      <html className="app">
        <head>
          <meta charSet="utf-8" />
          <meta name="description" content="Ripple React Boilerplate" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <title dangerouslySetInnerHTML={{__html: `${this.state.title} | Node React Boilerplate`}} />
          <link rel="stylesheet" type="text/css" href="/css/main.css" />
        </head>
        <body>
          <div className="container container--main">
            <div className="main">
              <TopNavigation {...this.state}/>
              <h1>{this.state.title}</h1>
              <Component {...this.props} setDefaults={this.setDefaults}/>
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

Main.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  messages: PropTypes.array,
  user: PropTypes.object
};

module.exports = Main;
