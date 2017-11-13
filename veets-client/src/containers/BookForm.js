import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBookFormData } from '../actions/bookForm';
import { createBook } from '../actions/books';

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
    const { name, author, img_url, rating } = this.props.bookFormData;

    return (
      <div className="row">
      <div className="centered-col">
        Add A Book
        <form onSubmit={this.handleOnSubmit} className="form-horizontal">
          <div className="form-group">
            <label htmlFor="name" className="control-label col-sm-2">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              className="form-control"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="control-label col-sm-2">Author:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="author"
              className="form-control"
              value={author}
            />
          </div>
          <div className="form-group">
            <label htmlFor="img_url" className="control-label col-sm-2">Cover:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              className="form-control"
              value={img_url}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating" className="control-label col-sm-2">Rating:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="rating"
              className="form-control"
              value={rating}
            />
          </div>

          <button type="submit" className="btn btn-default btn-sm">Add</button>
        </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bookFormData: state.bookFormData
  }
}

export default connect(mapStateToProps, { updateBookFormData, createBook })(BookForm);
