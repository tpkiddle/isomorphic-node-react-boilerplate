'use strict'

const React = require('react')

class EmailLayout extends React.Component {

  /**
   * Renders this layout component
   * @returns {XML}
   */
  render() {

    const mastheadStyles = {
      fontSize: '100%',
      fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif',
      lineHeight: '1.65',
      color: 'white',
      background: '#f21d43',
      margin: 0,
      padding: '48px 0'
    }

    return (
      <table className="body-wrap" style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', width: '100% !important', height: '100%', WebkitFontSmoothing: 'antialiased', WebkitTextSizeAdjust: 'none', background: '#ffffff', margin: 0, padding: 0}}>
        <tbody><tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
            <td className="container" style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', display: 'block !important', clear: 'both !important', maxWidth: '700px !important', margin: '0 auto', padding: 0}}>
              {/* Message start */}
              <table style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', width: '100% !important', borderCollapse: 'collapse', margin: 0, padding: 0}}>
                <tbody>
                  <tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
                    <td align="center" bgcolor="#71BC37" className="masthead" style={mastheadStyles}>
                      <h1 style={{fontSize: 32, fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.25', maxWidth: '90%', margin: '0 auto', padding: 0}}>
                        Node React JS Boilerplate
                      </h1>
                    </td>
                  </tr>
                  <tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
                    {this.props.children}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
            <td className="container" style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', display: 'block !important', clear: 'both !important', maxWidth: '700px !important', margin: '0 auto', padding: 0}}>

              <table style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', width: '100% !important', borderCollapse: 'collapse', margin: 0, padding: 0}}>
                <tbody><tr style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', margin: 0, padding: 0}}>
                    <td align="center" bgcolor="white" className="content footer" style={{fontSize: '100%', fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', background: 'white none', margin: 0, padding: '30px 35px'}}>
                      <p align="center" style={{fontSize: 14, fontFamily: '"Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif', lineHeight: '1.65', fontWeight: 'normal', color: '#888', textAlign: 'center', margin: 0, padding: 0}}>
                        Sent by Node React JS Boilerplate
                      </p>
                    </td>
                  </tr>
                </tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

EmailLayout.propTypes = {
  user: React.PropTypes.object
}

module.exports = EmailLayout



