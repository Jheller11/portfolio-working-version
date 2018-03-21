import React, { Component } from 'react'

const projectArray = [
  {
    title: 'test',
    url: 'test',
    description: 'test',
    img: 'test',
    repo: 'test'
  },
  {
    title: 'test1',
    url: 'test1',
    description: 'test1',
    img: 'test1',
    repo: 'test1'
  }
]

class Projects extends Component {
  render() {
    const projects = projectArray.map(project => {
      return (
        <div>
          <h3>{project.name}</h3>
          <img src={project.img} alt={project.name} />
          <p>{project.description}</p>
          <p>Visit the deployed project: {project.url}</p>
          <p>View the repository on GitHub: {project.repo}</p>
        </div>
      )
    })
    return <div>{projects}</div>
  }
}

export default Projects
