'use strict'

const React = require('react')
const EmailLayout = require('./EmailLayout')


class ExampleEmail extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {
    return (
      <EmailLayout user={this.props.user}>
        <td className="content" style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', background: 'white', margin: 0, padding: '30px 35px'}}>
          <h2 style={{fontSize: 22, fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.25', margin: '0 0 20px', padding: 0}}>
            Welcome, {this.props.user.auth.username}
          </h2>
          <p style={{fontSize: 16, fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', fontWeight: 'normal', margin: '0 0 20px', padding: 0}}>
           Example email intro content.
          </p>
          <table style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', width: '100% !important', borderCollapse: 'collapse', margin: 0, padding: 0}}>
            <tbody><tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
                <td style={{fontSize: '100%', textAlign:'center', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
                  <p style={{fontSize: 16, fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', fontWeight: 'normal', margin: '0 0 20px', padding: 0}}>
                    Example email body content.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </EmailLayout>
    )
  }
}

ExampleEmail.propTypes = {
  user: React.PropTypes.object
}

module.exports = ExampleEmail



