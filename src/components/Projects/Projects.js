import React, { Component } from 'react'

const projectArray = [
  {
    name: 'RentCheck DC',
    url: 'https://rentcheck-dc.surge.sh/',
    description:
      'Full stack tool for estimating DC rent prices by neighborhood, size, number of bedrooms and other factors.  This application uses a linear regression to calculate the estimated price based on a model created with data from other rental listings.',
    techs: ['React', 'Express', 'Node', 'MongoDB'],
    img: '/project4.png',
    repo: 'https://github.com/Jheller11/rentcheck-front'
  },
  {
    name: 'Global Cup',
    url: 'https://globalcup.surge.sh/',
    description:
      'Solution to handling registration for local recreational sports leagues.  Users have the ability to register a team and create a list of players.  Additionally, users can identify a coach/captain and provide contact information to receive league-wide announcements.',
    techs: ['React', 'Express', 'Node', 'MongoDB'],
    img: '/project3.png',
    repo: 'https://github.com/Jheller11/Project-3-front-end'
  },
  {
    name: 'Liverpool Links',
    url: 'https://liverpoollinks.herokuapp.com/',
    description:
      'This application was designed to allow fans of Liverpool FC to share news and videos.  Posts can include links to external articles/blog posts or youtube videos.  Additionally, the application provides a league table and map of premiere league stadiums.',
    techs: ['Express', 'Node', 'MongoDB', 'Handlebars'],
    img: '/project2.png',
    repo: 'https://github.com/Jheller11/LFC-page'
  },
  {
    name: 'Tower of Hanoi',
    url: 'https://jheller11.github.io/pyramids/',
    description:
      'This Tower of Hanoi inspired game was created for General Assembly WDI.  Move blocks to reassemble the pyramid from the left side to the right side.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    img: '/project1.png',
    repo: 'https://github.com/Jheller11/pyramids'
  }
]

class Projects extends Component {
  render() {
    const projects = projectArray.map(project => {
      let techs = project.techs.map(tech => {
        return <li>{tech}</li>
      })
      return (
        <div className="flex border">
          <div className="left">
            <h5>{project.name}</h5>

            <p>{project.description}</p>
            <ul>{techs}</ul>
            <p>
              Visit the deployed project:{' '}
              <a href={project.url}>{project.name}</a>
            </p>
            <p>
              View the repository on <a href={project.repo}>GitHub</a>{' '}
            </p>
          </div>
          <div className="right bottom valign-wrapper">
            <img src={project.img} alt={project.name} />
          </div>
        </div>
      )
    })
    return <div>{projects}</div>
  }
}

export default Projects
