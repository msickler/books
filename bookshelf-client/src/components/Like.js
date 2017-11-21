import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addLike} from '../reducers/books';

export class Like extends React.Component {
  constructor(props){
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this)
  }

  handleClickAdd = function(e) {
    e.preventDefault();
    this.props.addLike(this.props.book.id);
  }

  render() {
      return (
            <div>
              Like {this.props.book.likes}
              <button className="btn btn-primary" onClick={this.handleClickAdd} {...this.props.book.likes}>+</button>
            </div>
      );
  }
}
function mapDispatchToProps(dispatch) {
  return {addLike: bindActionCreators(addLike, dispatch)
          }
}
//set props
const mapStateToProps = (state, ownProps) => ({books : state.books});

Like = connect(mapStateToProps, mapDispatchToProps)(Like)
