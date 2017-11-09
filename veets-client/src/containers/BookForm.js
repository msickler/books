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
      <div>
        Add A Book
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="author"
              value={author}
            />
          </div>
          <div>
            <label htmlFor="img_url">Image Url:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="img_url"
              value={img_url}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="rating"
              value={rating}
            />
          </div>

          <button type="submit">Add Book</button>
        </form>
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
