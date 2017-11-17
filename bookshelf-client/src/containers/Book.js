import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'
import './Books.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class Book extends Component {
  constructor(props) {
   super(props);

   this.state = {
     book: []
   }
 }

  componentDidMount() {
    debugger
    this.props.actions.getBook(4)
  }

  render() {
    const { match } = this.props
    return (
      <div className="BooksContainer">
        <Switch>
          <Route exact path={match.url} render={() => (

              <div className="row centered-col">
                {this.props.book}
              </div>

          )}/>
       </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return ({ book: state.book })
}

 export default connect(mapStateToProps, mapDispatchToProps)(Book);
