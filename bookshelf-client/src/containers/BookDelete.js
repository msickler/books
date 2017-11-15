import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../actions/books'
import Scroll from 'react-scroll'; // Imports all Mixins
let Element    = Scroll.Element;


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
       <Element name="bookDelete" className="element">
       <div className="row">
       <br />
       <div className="centered-col form-title">
         Delete something?
         <form className="form-horizontal" onSubmit={this.handleOnSubmit.bind(this)} >
         <div className="form-group">
           <input className="delete-form search-bar-field"

             name="id"
             type="text"
             onChange={this.handleOnChange}
             placeholder=" book #"
             value={this.state.id}/>
             </div>
           <input className="btn btn-default btn-sm buttons" type="submit" value="Delete" />
         </form>
         <br />
         </div>
       </div>
       </Element>
     );
   }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

 export default connect(null, mapDispatchToProps)(BookDelete);
