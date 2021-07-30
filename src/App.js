import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './components/About'
import Users from "./components/Users"
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Link clasName = "nav" to="/">Home</Link>
      <Link clasName = "nav" to="/About">About</Link>
      <Link clasName = "nav" to="Users">Users</Link>
        <Route path="/About" component={About} />
        <Route path="/Users" component={Users} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>  
    );
  }
}

export default App;
