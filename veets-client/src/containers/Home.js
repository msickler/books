import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ShowCard from '../components/ShowCard.js'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      trendingTitles: [],
    }
  }

  componentDidMount() {
    if (this.props.store.getState().trendingTitles.length === 0) {
      var trendingTitlesResp = fetch("", {
        method: "GET",
        headers: {
          "Content-Type": "application/vnd.api+json",
          "Accept": "application/vnd.api+json"
        },
      }).then(response => response.json())
        .then(json => json.forEach((trendingTitle) => {
          var action = this.props.addTrendingTitle(trendingTitle)
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

      var titles = this.props.trendingTitles.map((title, index) =>
        <ShowCard key={title.id} title={title.title} year={title.year} description={title.overview} data={title} store={this.props.store} columns={2} />
      )
    } catch(err) {
      console.log(err)
      var titles = ""
    }
    return (
      <div>
        <p>Trending titles</p>
        <div class="border row">
          {titles}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { trendingTitles: state.trendingTitles}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTrendingTitle: addTrendingTitle
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
