import React, { Component } from 'react';
import Home from "./components/Home";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Pay from './components/Pay';
import History from './components/History';
import {Route} from "react-router-dom";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/pay' component={Pay} />
        <Route path='/history' component={History} />
      </div>
      </Router>
    );
  }
}

export default App;