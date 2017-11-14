import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBookFormData } from '../actions/bookForm';
import { createBook } from '../actions/books';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
let Element    = Scroll.Element;

class BookForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentBookFormData = Object.assign({}, this.props.bookFormData, {
      [name]: value
    })
    this.props.updateBookFormData(currentBookFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createBook(this.props.bookFormData)
  }

  render() {
    const { name, author, img_url, rating, completed } = this.props.bookFormData;

    return (
      <Element name="bookForm" className="element">
      <br/><br/>
      <div className="row">
      <div className="centered-col form-title">
      <br/>
        Add Book
        <form onSubmit={this.handleOnSubmit} className="form-horizontal" name="firstInsideContainer">
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2 book-form">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              className="form-control"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="control-label col-sm-2 book-form">Author:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="author"
              className="form-control"
              value={author}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img_url" className="control-label col-sm-2 book-form">Cover:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              className="form-control"
              value={img_url}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating" className="control-label col-sm-2 book-form">Rating:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="rating"
              className="form-control"
              value={rating}
            />
          </div>
          <div className="form-group">
            <label htmlFor="completed" className="control-label col-sm-2 book-form">Completed:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="completed"
              className="form-control"
              placeholder="Yes/No"
              value={completed}
            />
          </div>
          <button type="submit" className="btn btn-default btn-sm buttons">Add</button>
        </form>
        <br/>
        <hr/>
        </div>
      </div>
      </Element>
    )
  }
}

const mapStateToProps = state => {
  return {
    bookFormData: state.bookFormData
  }
}

export default connect(mapStateToProps, { updateBookFormData, createBook })(BookForm);
