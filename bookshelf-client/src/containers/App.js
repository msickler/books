import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './Books';
import NavBar from '../components/NavBar'
import Header from '../components/Header.js'
import Footer from '../components/Footer'
import NotFound from '../components/NotFound.js'
import About from '../components/About.js'
import EditBook from './EditBook.js'
import Favorites from './Favorites';
import './App.css';

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
                  <Route exact path="/books" component={Books} />
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/books/:id/edit' component={EditBook}/>
                  <Route exact path='/books/edit' component={EditBook}/>
                  <Route exact path='/books/favorites' component={Favorites}/>
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
