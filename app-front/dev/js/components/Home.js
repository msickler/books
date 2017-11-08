import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTitles} from '../actions/index';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      allTitles: [],
    }
  }

  componentDidMount() {
    if (this.props.store.getState().allTitles.length === 0) {
      var allTitlesResp = fetch("https://kitsu.io/api/edge/anime", {
        method: "GET",
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        },
      }).then(response => response.json())
        .then(json => json.forEach((title) => {
          var action = this.props.addTitle(title)
          console.log(this.props.store.getState())
        })
      )
    }
    setInterval(() => {
      this.setState(this.state)
    }, 2000);
  }

  render() {
    try {

      var titlesList = this.props.allTitles.map((title, index) =>
        <ShowCard name={title.canonicalTitle} summary={title.synopsis} rank={title.popularityRank} episodes={title.episodeCount} rating={title.averageRating} image={title.coverImage.small} data={title} store={this.props.store} columns={2} />
      )
    } catch(err) {
      console.log(err)
      var titlesList = ""
    }
    return (
      <div>
        <p>Titles by popularity</p>
        <div class="border row">
          {titlesList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { allTitles: state.allTitles}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTitle: addTitle
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
