import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Jeffrey Heller</h1>
      <h2>Web Developer</h2>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </nav>
    </header>
  )
}

export default Header
