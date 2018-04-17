import React, { Component } from 'react'
import Experience from '../Experience/Experience'

const about = {
  brand:
    'Hello!  Thanks for visiting my page!  After working in the legal industry for almost 10 years, I decided to pursue my interest in programming and web development. I like building functional easy to use sites and have deployed several small front and back end projects.  ',
  skills1: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Redux', 'React'],
  skills2: ['MongoDB', 'Express', 'Node', 'Git', 'Github', 'Rails'],
  close: ''
}

class About extends Component {
  render() {
    let skills = about.skills1.map(skill => {
      return <li className="collection-item">{skill}</li>
    })
    let skills2 = about.skills2.map(skill2 => {
      return <li className="collection-item">{skill2}</li>
    })
    return (
      <div>
        <div className="left column">
          <h4>About Me:</h4>
          <p>
            {about.brand} To take a closer look, please visit my{' '}
            <a href="/projects">projects</a> page.
          </p>
          <h4>Education:</h4>
          <Experience />
        </div>
        <div className="right side">
          <h4>Skills: </h4>
          <div className="flex">
            <ul className="collection left">{skills}</ul>
            <ul className="collection right">{skills2}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
