import React, { Component } from 'react'

const about = {
  brand:
    'Full-stack web developer with a passion for learning and finding creative solutions to the most complex problems. Experienced team leader who believes in using effective communication and planning to meet organizational goals.',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Ruby',
    'Redux',
    'React',
    'MongoDB',
    'Express',
    'Node',
    'Git',
    'Github'
  ],
  close: ''
}

class About extends Component {
  render() {
    let skills = about.skills.map(skill => {
      return <li>{skill}</li>
    })
    return (
      <div>
        <p>"{about.brand}"</p>
        <p>Skills: </p>
        <ul>{skills}</ul>
      </div>
    )
  }
}

export default About
