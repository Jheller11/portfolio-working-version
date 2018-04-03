import React from 'react'

const contact = {
  email: 'heller.jeffrey@gmail.com',
  github: 'https://github.com/Jheller11',
  linkedIn: 'https://www.linkedin.com/in/jeffreyaheller/'
}
const Contact = () => {
  return (
    <div className="contact">
      <p>
        Email: <a href="mailto:heller.jeffrey@gmail.com"> {contact.email}</a>
      </p>
      <p>
        <a href={contact.github}>GitHub</a>
      </p>
      <p>
        <a href={contact.linkedIn}>LinkedIn</a>
      </p>
    </div>
  )
}

export default Contact
