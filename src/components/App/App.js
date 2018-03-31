import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header.js'
import About from '../About/About.js'
import Projects from '../Projects/Projects.js'
import Experience from '../Experience/Experience.js'
import Contact from '../Contact/Contact.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={About} />
            {/* <Redirect path="/*" to="/" /> */}
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
