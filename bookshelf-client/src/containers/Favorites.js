import React, { Component }  from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      myBooks:this.props.books
    }
  }

 componentDidMount() {
   this.props.actions.getBooks()
   this.setState({ myBooks: this.props.books})
 }

  render() {
    const { match } = this.props

    return (
      <div className="row">
        <Switch>
          <Route exact path={match.url} render={() => (
            <div className="favorites">
            <h3 className="favorites-title"> Priced Collection </h3><hr/>
            {this.props.books.filter(book => book.rating === 10).map(book => <BookCard key={book.id} book={book} id={book.id} store={this.props.store} />) }
            <br></br>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const mapStateToProps = (state) => {
  return ({ books: state.books })
}

 export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
