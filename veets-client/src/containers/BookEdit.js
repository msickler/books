import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/books.js'
import { bindActionCreators } from 'redux'

class BookEdit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      author: '',
      img_url: '',
      rating: '',
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

    this.props.actions.editBook(bookAttributes)
    this.setState({
      name: '',
      author: '',
      img_url: '',
      rating: '',
      id: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)} >
          <input className=""
            name="id"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Book Id"
            value={this.state.id}/>

          <input className=""
            name="name"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Book name"
            value={this.state.name}/>

          <input className=""
            name="author"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Author"
            value={this.state.author}/>

          <input className=""
            name="img_url"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Image_url"
            value={this.state.img_url}/>

            <input className=""
              name="rating"
              type="number"
              onChange={this.handleOnChange}
              placeholder="Rating"
              value={this.state.rating}/>
          <br></br>
          <input className="" style={{background: '#ccc'}} type="submit" value="Edit Book" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(null, mapDispatchToProps)(BookEdit);
