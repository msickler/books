import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Home from './containers/Home.js'
import Header from './components/Header.js'
import NotFound from './components/NotFound.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import configureStore from './configureStore'

class App extends Component {
  constructor() {
    super();

    this.state = {
      titles: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <NavBar />
            <h1> hello </h1>
            <Switch>
              <Route exact path="/" render={(props) => (<Home store={this.props.store}/>)} />
              <Route  component={NotFound } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTitles: addTitles,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
