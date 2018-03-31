import React, { Component } from 'react'

const about = {
  brand:
    'Full-stack web developer with a passion for learning and finding creative solutions to the most complex problems. Experienced team leader who believes in using effective communication and planning to meet organizational goals.',
  skills1: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Redux', 'React'],
  skills2: ['MongoDB', 'Express', 'Node', 'Git', 'Github'],
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
      <div>
        <p>"{about.brand}"</p>
        <p>Skills: </p>
        <div className="flex">
          <ul>{skills}</ul>
          <ul>{skills2}</ul>
        </div>
      </div>
    )
  }
}

export default About
