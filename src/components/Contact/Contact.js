import React from 'react'

const contact = {
  email: 'heller.jeffrey@gmail.com',
  github: 'https://github.com/Jheller11',
  linkedIn: 'https://www.linkedin.com/in/jeffreyaheller/'
}
const Contact = () => {
  return (
    <div className="contact">
      <a href="mailto:heller.jeffrey@gmail.com">
        <img className="icon large" src="/email.png" />
      </a>
      <a href={contact.github}>
        <img className="icon" src="/github.png" />
      </a>
      <a href={contact.linkedIn}>
        <img className="icon" src="/linkedin.png" />
      </a>
    </div>
  )
}

export default Contact
