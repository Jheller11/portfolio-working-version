import React from 'react'

const contact = {
  email: 'heller.jeffrey@gmail.com',
  github: 'https://github.com/Jheller11',
  linkedIn: 'https://www.linkedin.com/in/jeffreyaheller/'
}
const Contact = () => {
  return (
    <div>
      <p className="center">
        Thanks for visiting my page. Please use any of the links below to
        contact me:
      </p>
      <div className="contact">
        <a href="mailto:heller.jeffrey@gmail.com">
          <img className="icon large" alt="email" src="/email.png" />
          heller.jeffrey@gmail.com
        </a>
        <a href={contact.github}>
          <img className="icon" alt="github" src="/github.png" /> GitHub
        </a>
        <a href={contact.linkedIn}>
          <img className="icon" alt="linkedin" src="/linkedin.png" /> LinkedIn
        </a>
      </div>
      <div id="space" />
    </div>
  )
}

export default Contact
