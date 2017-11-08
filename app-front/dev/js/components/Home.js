import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTitles} from '../actions/index';

class Home extends Component {
  componentWillMount() {
    this.props.getTitles();
  }

  render() {
    return(
      <div>
      Home page
      </div>
    )
  }
}

export default connect(null, {getTitles: getTitles})(Home);
