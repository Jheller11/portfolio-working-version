import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div>
        <h1>Jeffrey Heller</h1>
        <h2>- Web Developer</h2>
      </div>
      <nav>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
