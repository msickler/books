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
import TitleService from './services/TitleService'
const scrapeIt = require("scrape-it")

class App extends Component {
  constructor() {
    super();

    this.state = {
      titles: []
    };
  }

  componentDidMount() {
   TitleService.fetchTitles()
   .then(json => json.forEach((title) => {
     var action = this.props.addTitle(title)
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
            <Switch>
              <Route exact path="/" render={(props) => (<Home store={this.props.store}/>)} />
              <Route exact path="/titles" render={(props) => (<Titles store={this.props.store}/>)} />
              <Route exact path="/titles/new" render={(props) => (<TitlesSearch store={this.props.store}/>)} />
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
