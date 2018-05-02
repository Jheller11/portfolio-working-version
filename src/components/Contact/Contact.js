import React, { Component } from 'react'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      email: [
        'mailto:heller.jeffrey@gmail.com',
        'Email: heller.jeffrey@gmail.com'
      ],
      github: ['https://github.com/Jheller11', 'GitHub Profile: Jheller11'],
      linkedIn: [
        'https://www.linkedin.com/in/jeffreyaheller/',
        'LinkedIn Profile: jeffreyaheller'
      ],
      activeContact: ''
    }
    this.setActive = this.setActive.bind(this)
    this.clearActive = this.clearActive.bind(this)
  }

  setActive(e) {
    let input = e.target.alt
    if (this.state.activeContact !== input) {
      this.setState({
        activeContact: input
      })
    }
  }

  clearActive() {
    this.setState({
      activeContact: ''
    })
  }
  render() {
    return (
      <div onMouseLeave={this.clearActive}>
        <p className="center" />
        <div className="contact">
          <a className="contact-row" href="mailto:heller.jeffrey@gmail.com">
            <img
              onMouseOver={this.setActive}
              className="icon large"
              alt={this.state.email[1]}
              src="/email.png"
            />
          </a>
          <a className="contact-row" href={this.state.github}>
            <img
              onMouseOver={this.setActive}
              className="icon"
              alt={this.state.github[1]}
              src="/github.png"
            />
          </a>
          <a className="contact-row" href={this.state.linkedIn}>
            <img
              onMouseOver={this.setActive}
              className="icon"
              alt={this.state.linkedIn[1]}
              src="/linkedin.png"
            />{' '}
          </a>
        </div>
        <div className="center active">{this.state.activeContact}</div>
        <div id="space" />
      </div>
    )
  }
}

export default Contact
