import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'
import Scroll from 'react-scroll'; // Imports all Mixins
let Element    = Scroll.Element;

class BookEdit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      author: '',
      img_url: '',
      rating: '',
      completed: '',
      id: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const bookAttributes = {id: this.state.id}
    if (this.state.name !== "") {bookAttributes['name'] = this.state.name}
    if (this.state.author !== "") {bookAttributes['author'] = this.state.author}
    if (this.state.img_url !== "") {bookAttributes['img_url'] = this.state.img_url}
    if (this.state.rating !== "") {bookAttributes['rating'] = this.state.rating}
    if (this.state.completed !== "") {bookAttributes['completed'] = this.state.completed}

    this.props.actions.editBook(bookAttributes)
    this.setState({
      name: '',
      author: '',
      img_url: '',
      rating: '',
      completed: '',
      id: '',
    })
  }

  render() {
    return (
      <Element name="bookEdit" className="element">
      <div className="row">
      <div className="centered-col form-title">
      <br/>
        Edit Book
        <form onSubmit={this.handleOnSubmit.bind(this)} className="form-horizontal open-books">
        <div className="form-group">
        <label htmlFor="id" className="control-label col-sm-2 book-form">#:</label>
          <input className="form-control"
            name="id"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.id}/>
            </div>
          <div className="form-group">
          <label htmlFor="name" className="control-label col-sm-2 book-form">Name:</label>
          <input className="form-control"
            name="name"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.name}/>
            </div>
            <div className="form-group">
            <label htmlFor="author" className="control-label col-sm-2 book-form">Author:</label>
          <input className="form-control"
            name="author"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.author}/>
            </div>
            <div className="form-group">
            <label htmlFor="img_url" className="control-label col-sm-2 book-form">Cover:</label>
          <input className="form-control"
            name="img_url"
            type="text"
            onChange={this.handleOnChange}
            value={this.state.img_url}/>
            </div>
            <div className="form-group">
            <label htmlFor="rating" className="control-label col-sm-2 book-form">Rating:</label>
            <input className="form-control"
              name="rating"
              type="number"
              onChange={this.handleOnChange}
              value={this.state.rating}/>
            </div>
            <div className="form-group">
            <label htmlFor="completed" className="control-label col-sm-2 book-form">Completed:</label>
            <input className="form-control"
              name="completed"
              type="text"
              onChange={this.handleOnChange}
              value={this.state.completed}/>
            </div>
          <input className="btn btn-default btn-sm buttons" type="submit" value="Save" />
        </form>
        <hr/>
        </div>
      </div>
      </Element>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(BookEdit);
