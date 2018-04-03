import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h1>Jeffrey Heller</h1>
        <h4>- Web Developer</h4>
      </div>
    </header>
  )
}

export default Header
