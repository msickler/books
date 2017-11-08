import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js'
import Home from './containers/Home.js'
import MyShows from './containers/MyShows.js'
import Header from './components/Header.js'
import NotFound from './components/NotFound.js'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyShowService from './services/MyShowService'
const scrapeIt = require("scrape-it")

class App extends Component {
  constructor() {
    super();

    this.state = {
      titles: []
    };
  }

  componentDidMount() {
   this.props.clearMyShows();
   MyShowService.fetchMyShows()
   .then(json => json.forEach((myShow) => {
     var action = this.props.addMyShow(myShow)
     console.log(this.props.store.getState())
   }))
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
