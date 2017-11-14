import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Books from './Books';
import NavBar from '../components/NavBar'
import Section from '../components/Section'
import Header from '../components/Header.js'
import Footer from '../components/Footer'
import NotFound from '../components/NotFound.js'
import About from '../components/About.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import '../components/NavBar.css';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
      <div className="App">
        <Header />
          <Router>
            <div>
            <NavBar />
              <Switch>
                <Route exact path="/" component={Books} />
                <Route exact path='/about' component={About}/>
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </div>

          </Router>
      </div>
      </div>
    );
  }
}

export default App;
