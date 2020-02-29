import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Tasky from './Tasky'

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-default'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <Link className='navbar-brand' style={{ color: 'white',textShadow:'2px 2px 6px #000000',fontFamily:'sanserif'}}
                 to={'/'}><p>{'Panel Todo'}</p></Link>
              </div>
              <ul className='nav navbar-nav'>
                <li className='active'><Link to={'/'}>List Task</Link></li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Tasky} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Main
