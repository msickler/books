import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPopularTitle } from '../actions/addPopularTitle';
import TitleCard from '../components/TitleCard';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      popularTitles: [],
    }
  }

  componentDidMount() {
    if (this.props.store.getState().popularTitles.length === 0) {
      var popularTitlesResp = fetch("https://kitsu.io/api/edge/anime", {
        method: "GET",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "Accept": "application/vnd.api+json"
        },
      }).then(response => response.json())
        .then(json => json.forEach((popularTitle) => {
          var action = this.props.addPopularTitle(popularTitle)
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
      var popTitles = this.props.popularTitles.map((title, index) =>
        <TitleCard key={title.id} name={title.canonicalTitle} summary={title.synopsis} rank={title.popularityRank} episodes={title.episodeCount} rating={title.averageRating} image={title.coverImage.small} data={title} store={this.props.store} columns={2} />
      )
    } catch(err) {
      console.log(err)
      var titles = ""
    }
    return (
      <div>
        <p>Popular Titles</p>
        <div class="border row">
          {popTitles}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { popularTitles: state.popularTitles}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPopularTitle: addPopularTitle
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
