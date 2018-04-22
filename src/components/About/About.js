import React, { Component } from 'react'
import Experience from '../Experience/Experience'

const about = {
  brand:
    'After working in the legal industry for almost 10 years, I decided to pursue my interest in programming and web development. I like building functional easy to use sites and have deployed several small front and back end projects.  ',
  skills1: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Redux', 'React'],
  skills2: ['MongoDB', 'Express', 'Node', 'Git', 'Github', 'Rails'],
  close: ''
}

class About extends Component {
  render() {
    let skills = about.skills1.map(skill => {
      return <li>{skill}</li>
    })
    let skills2 = about.skills2.map(skill2 => {
      return <li>{skill2}</li>
    })
    return (
      <main>
        <div>
          <h4>About Me:</h4>
          <p>
            {about.brand} To see a sample of some of the projects I'm working
            on, please take a look at my <a href="/projects">projects</a> page.
          </p>
          <h4>Experience:</h4>
          <Experience />
        </div>
        <div>
          <h4>Skills: </h4>
          <div>
            <ul>{skills}</ul>
            <ul>{skills2}</ul>
          </div>
        </div>
      </main>
    )
  }
}

export default About
