import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/books';
import { bindActionCreators } from 'redux'

class BookDelete extends Component {
  constructor (props) {
    super(props);

    this.state = {
      id: '',
    };
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

   handleOnSubmit = (event) => {
     event.preventDefault();
     let id = parseInt(this.state.id, 10)
     this.props.store.deleteBook(id)
     this.setState({id: ""})
   }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleOnSubmit.bind(this)} >
          <input className="App-form"
            name="id"
            type="text"
            onChange={this.handleOnChange}
            placeholder="Delete Id"
            value={this.state.id}/>
          <br></br>
          <input className="" type="submit" value="Delete Book" />
        </form>
      </div>
    );
  }
}

//function mapDispatchToProps(dispatch) {{bindActionCreators(actions, dispatch)}
//}

export default connect(null, mapDispatchToProps)(BookDelete);
