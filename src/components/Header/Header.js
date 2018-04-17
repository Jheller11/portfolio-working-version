import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav-wrapper light-blue">
          <div className="right">
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h3>Jeffrey Heller</h3>
          <h6> Web Developer</h6>
          <div className="right contact-icons" />
        </div>
      </header>
    )
  }
}

export default Header
