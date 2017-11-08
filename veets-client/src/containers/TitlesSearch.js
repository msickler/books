import { connect } from 'react-redux';
import { addSearchedTitle, clearSearchedTitles } from '../actions/addSearchedTitle.js';
import React from 'react';
import { bindActionCreators } from 'redux';
import TitleCard from '../components/TitleCard.js'

class TitlesSearch extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      searchedTitles: []
    };
  }

  componentDidUpdate() {
    if (this.props.store.getState().searchedTitles.length === 0) {
      var searchedShowResp = fetch("https://kitsu.io/api/edge/anime?text=" + this.state.name, {
        method: "GET",
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json"
        },
      }).then(response => response.json())
        .then(json => json.forEach((searchedTitle) => {
          searchedTitle = searchedTitle.show
          var action = this.props.addSearchedTitle(searchedTitle)
          console.log(this.props.store.getState())
        }))
    }

    setInterval(() => {
      this.setState(this.state)
    }, 2000);
  }

  handleOnChange = event => {
    console.log(this.state.searchedTitles)
    this.setState({
      name: event.target.value,
      searchedTitles: []
    });
    this.props.clearSearchedTitles();
  }

  render(){
    try {
      var searchedTitlesList = this.props.searchedTitles.map((title, index) =>
        <TitleCard name={title.canonicalTitle} summary={title.synopsis} rank={title.popularityRank} episodes={title.episodeCount} rating={title.averageRating} image={title.coverImage.large} data={title} store={this.props.store} columns={2} />
      )
    } catch(err) {
      console.log(err)
      var popTitles = ""
    }

    return (
      <div>
        <p>Add Shows </p>
        <form style={{ margin: '20px 300px' }} onSubmit={this.handleOnSubmit} >
          <input
            type="text"
            onChange={this.handleOnChange}
            placeholder="Search Titles" />
        </form>
        {searchedTitlesList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchedTitles: state.searchedTitles,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addSearchedTitle: addSearchedTitle,
    clearSearchedTitles: clearSearchedTitles
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TitlesSearch)
