import React, { Component } from 'react'

const projectArray = [
  {
    name: 'RentCheck DC',
    url: 'https://rentcheck-dc.surge.sh/',
    description:
      'Full stack tool for estimating DC rent prices by neighborhood, size, number of bedrooms and other factors.  This application uses a linear regression to calculate the estimated price based on a model created with data from other rental listings. I am currently working on the 2nd phase of this application which will include an interactive DC neighborhood map with neighborgood statistics and descriptions.',
    techs: ['React', 'Express', 'Node', 'MongoDB'],
    img: '/project4.png',
    repo: 'https://github.com/Jheller11/rentcheck-front'
  },
  {
    name: 'Global Cup',
    url: 'https://globalcup.surge.sh/',
    description:
      'Solution to handling registration for local recreational/youth sports leagues.  Users have the ability to register a team and create a list of players.  Additionally, users can identify a coach/captain and provide contact information to receive league-wide announcements.  This project was created with a small group.  My primary responsibility was creating the back end server using Node and Express and setting up all connections between the front end and server.',
    techs: ['React', 'Express', 'Node', 'MongoDB'],
    img: '/project3.png',
    repo: 'https://github.com/Jheller11/Project-3-front-end'
  },
  {
    name: 'Liverpool Links',
    url: 'https://liverpoollinks.herokuapp.com/',
    description:
      'This application was designed to allow fans of Liverpool FC to share news and videos.  Posts can include links to external articles/blog posts or youtube videos and users have the ability to discuss news articles on this page using the comments feature.  Additionally, the application provides a league table and map of English Premiere League stadiums.',
    techs: ['Express', 'Node', 'MongoDB', 'Handlebars'],
    img: '/project2.png',
    repo: 'https://github.com/Jheller11/LFC-page'
  },
  {
    name: 'Pyramids (A Towers of Hanoi inspired game)',
    url: 'https://jheller11.github.io/pyramids/',
    description:
      'Thee pyramid starts in the left column of the board.  The objective of the game is to move the pyramid to the third column on the right of the board by only moving one piece at a time.  Additionally, a larger block can never by placed on top of a smaller block.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    img: '/project1.png',
    repo: 'https://github.com/Jheller11/pyramids'
  }
]

class Projects extends Component {
  render() {
    const projects = projectArray.map(project => {
      let techs = project.techs.map(tech => {
        return <li className="skill">{tech}</li>
      })
      return (
        <div className="flex">
          <div>
            <h3>{project.name}</h3>

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
          <div>
            <img className="preview" src={project.img} alt={project.name} />
          </div>
        </div>
      )
    })
    return <div>{projects}</div>
  }
}

export default Projects
