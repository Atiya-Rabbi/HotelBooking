import React from 'react';
import './App.css'
import Navigation from './components/header';
import Home from './components/home';
import About from './components/about'
import Contact from './components/contact'
import Hotel from './components/hotel'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  render() {
    return(
        <Router>
          <Navigation/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/?city=:dest_name' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/hotel/:hotel_id' component={Hotel}/>
          </Switch>
          <Card.Footer className="text-muted text-center">Hotel Booking</Card.Footer>
        </Router>
        
      );
  }
}

export default App;