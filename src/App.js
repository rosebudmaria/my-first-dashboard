import React, {Component} from 'react'
import './App.css'
import NavBar from "./components/nav_bar" 
import HomePage from './pages/home_page'
import AboutPage from './pages/about_page'
import DashboardPage from './pages/dashboard_page'
import {Switch, Route} from 'react-router-dom'

 
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <main>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route path='/dashboard' component={DashboardPage}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App