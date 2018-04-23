import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header.js'
import About from '../About/About.js'
import Projects from '../Projects/Projects.js'
import Contact from '../Contact/Contact.js'
import './App.css'
import Footer from '../Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={About} />

            {/* <Redirect path="/*" to="/" /> */}
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
