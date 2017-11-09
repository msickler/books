import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from './Books';
import NavBar from '../components/NavBar'
import Header from '../components/Header.js'
import NotFound from '../components/NotFound.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Router>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={Books} />
                <Route  component={NotFound} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
