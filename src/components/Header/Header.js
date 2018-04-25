import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <div className="left-header" />
          <div>
            <h1>Jeffrey Heller</h1>
            <h4> Web Developer</h4>
          </div>
          <div className="right-header" />
        </div>
        <div className="forty">
          <nav>
            <Link to="/">About</Link> <span>|</span>
            <Link to="/projects">Projects</Link> <span>|</span>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
