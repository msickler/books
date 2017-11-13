import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../actions/books';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/books'


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
     this.props.actions.deleteBook(id)
     this.setState({id: ""})
   }

   render() {
     return (
       <div>
         <form  onSubmit={this.handleOnSubmit.bind(this)} >
           <input className=""
             name="id"
             type="text"
             onChange={this.handleOnChange}
             placeholder="Book Id"
             value={this.state.id}/>
           <br></br>
           <input className="" style={{background: '#ccc'}} type="submit" value="Delete Book" />
         </form>
       </div>
     );
   }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

 export default connect(null, mapDispatchToProps)(BookDelete);
