'use strict';

class LoggerService {

  static formatMessages(msgs, prefix) {
    return `[${prefix}] ${msgs.join(',').replace('., ', ', ')}`;
  }

  static info(msg, err) {
    const messages = [];

    messages.push(msg);

    if (err && typeof err === 'object' && 'message' in err) {
      messages.push(err.message);
    }

    console.log(
      this.formatMessages([messages], 'INFO')
    );
  }

  static error(msg, err) {
    const messages = [];

    messages.push(msg);

    if (err && typeof err === 'object' && 'message' in err) {
      messages.push(err.message);
    }

    console.error(
      this.formatMessages([messages], 'ERROR')
    );
  }
}

module.exports = LoggerService;