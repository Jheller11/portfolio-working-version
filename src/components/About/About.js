import React, { Component } from 'react'
import Experience from '../Experience/Experience'
import { Link } from 'react-router-dom'

const about = {
  brand:
    "I am a full-stack web developer with a passion for learning and finding creative solutions to the most complex problems. I love coding because there's always more to see and more to learn.  ",
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'Express',
    'Ruby',
    'Rails',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'GitHub'
  ]
}

class About extends Component {
  render() {
    let skills = about.skills.map(skill => {
      return <li className="skill">{skill}</li>
    })

    return (
      <div>
        <div className="about">
          <h2>Who I Am:</h2>
          <p>{about.brand}</p>
          <p>
            To see a sample of some of the projects I'm working on, please take
            a look at my <Link to="/projects">projects</Link> page.
          </p>
          <p>
            Questions? Want to get in touch? Reach out{' '}
            <Link to="/contact">here</Link>!
          </p>
        </div>
        <div className="about">
          <h2>What I Use: </h2>
          <div>
            <p>
              <ul>{skills}</ul>
            </p>
          </div>
        </div>
        <div className="about">
          <h2>How I Learned:</h2>
          <Experience />
        </div>
        <div className="about">
          <h2>What I'm Looking For:</h2>
          <p>
            I am moving to New York, New York at the end of May, 2018. I am
            currently looking for front end/full stack developer jobs in the NYC
            area.
          </p>
        </div>
      </div>
    )
  }
}

export default About
