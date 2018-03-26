import React, { Component } from 'react'

const projectArray = [
  {
    name: 'Tower of Hanoi',
    url: 'https://jheller11.github.io/pyramids/',
    description:
      'This Tower of Hanoi inspired game was created for General Assembly WDI.  Move blocks to reassemble the pyramid from the left side to the right side.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    img: 'test',
    repo: 'https://github.com/Jheller11/pyramids'
  },
  {
    name: 'Liverpool Links',
    url: 'https://liverpoollinks.herokuapp.com/',
    description:
      'This application was designed to allow fans of Liverpool FC to share news and videos.  Posts can include links to external articles/blog posts or youtube videos.  Additionally, the application provides a league table and map of premiere league stadiums.',
    techs: ['Mongoose', 'Express', 'Node', 'Handlebars'],
    img: 'test1',
    repo: 'https://github.com/Jheller11/LFC-page'
  }
]

class Projects extends Component {
  render() {
    const projects = projectArray.map(project => {
      let techs = project.techs.map(tech => {
        return <li>{tech}</li>
      })
      return (
        <div>
          <h3>{project.name}</h3>
          <img src={project.img} alt={project.name} />
          <p>{project.description}</p>
          <ul>{techs}</ul>
          <p>
            Visit the deployed project: <a href={project.url}>{project.name}</a>
          </p>
          <p>
            View the repository on <a href={project.repo}>GitHub</a>{' '}
          </p>
        </div>
      )
    })
    return <div>{projects}</div>
  }
}

export default Projects
