'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {form: {
      isSubmitted: false,
      message: ''
    }};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const form = {};

    if(this.state.form.isSubmitted) {
      form.isSubmitted = true;
      form.message = 'You cannot submit this form again';
    } else {
      form.isSubmitted = true;
      form.message = 'Thank you for your submission, Ripple will be in touch';
    }

    this.setState(prevState => ({form: form}));
  }

  render() {
    return (
      <div className="clearfix">
        <form className="form">
          <div className="form-group">
            <input className="form-control" type="email"
                   placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <input className="form-control" type="text"
                   placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Enter your message">
            </textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={this.handleClick}
                    disabled={this.state.form.isSubmitted}>
              Submit
            </button>
          </div>
          <p>{this.state.form.message}</p>
        </form>
      </div>
    );
  }
}

Contact.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.object,
  title: PropTypes.string.isRequired,
  path: PropTypes.string
};

module.exports = Contact;
