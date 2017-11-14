'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.setCurrency = this.setCurrency.bind(this);
  }

  setCurrency(event) {

    /**
     * Updates the currency value in the defaults object.
     */

    this.props.defaults.currency = event.target.value;
    this.props.setDefaults(this.props.defaults);
  }

  render() {
    return (
      <div className="clearfix">
        <form className="form">
          <div className="form-group">
            <label>Preferred currency</label>
            <select className="form-control" onChange={this.setCurrency}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BTC">BTC</option>
              <option value="KRW">KRW</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.object,
  title: PropTypes.string.isRequired,
  path: PropTypes.string
};

module.exports = Settings;
