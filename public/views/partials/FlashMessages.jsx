'use strict';

const React = require('react');
const PropTypes = require('prop-types');

class FlashMessages extends React.Component {
  getTitle(title) {
    if(title) {
      return <h4>{title}</h4>;
    }
    return false;
  };

  getClasses(type) {
    if(type) {
      return `alert alert-${type} alert-block`;
    }
    return false;
  };

  getBody(body) {
    if(typeof body === 'object' && body.constructor.name === 'Array') {
      return (
        <ul>
           {
            body.map((item, i) => {
              return (<li>{item.type}: {item.message}</li>)
            })
          }
        </ul>
      )
    } else {
      return (<p>{body}</p>)
    }
    return false;
  };

  render() {
    const that = this;

    if(this.props.messages && this.props.messages.length) {
      return (
        <div>
          {this.props.messages.map(function(message, i) {
            const classes = that.getClasses(message.type);
            const title = that.getTitle(message.title);
            const body = that.getBody(message.body);

            return (
              <div className={classes}>
                <button type="button" className="close" data-dismiss="alert">×</button>
                {title}
                {body}
              </div>
            );
          })}
        </div>
      );
    }
    else {
      return false;
    }
  };
};

FlashMessages.propTypes = {
  messages: PropTypes.array
};

module.exports = FlashMessages;
