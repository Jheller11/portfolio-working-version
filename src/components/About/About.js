import React, { Component } from 'react'
import Experience from '../Experience/Experience'

const about = {
  brand:
    'Full-stack web developer with a passion for learning and finding creative solutions to the most complex problems. Experienced team leader who believes in using effective communication and planning to meet organizational goals.',
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
          <p>"{about.brand}"</p>
          <Experience />
        </div>
        <div className="right side">
          <p>Skills: </p>
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
