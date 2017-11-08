import { connect } from 'react-redux';
import { addTitle } from '../actions/addTitle';
import React from 'react';
import TitleService from '../services/TitleService';
import { bindActionCreators } from 'redux';
import TitleCard from '../components/TitleCard';

class Titles extends React.Component {

  constructor() {
    super();

    this.state = {
      titles: []
    };
  }

  componentDidMount() {
    TitleService.fetchTitles()
    .then(json => json.forEach((title) => {
      var action = this.props.addTitle(title)
      console.log(this.props.store.getState())
    }))
  }

  render(){
    try {
      var titles = this.props.titles.map((title, index) =>
        <TitleCard name={title.canonicalTitle} summary={title.synopsis} rank={title.popularityRank} episodes={title.episodeCount} rating={title.averageRating} image={title.coverImage.small} data={title}  store={this.props.store} columns={1} />
      )
    } catch(err) {
      console.log(err)
      var popTitles = ""
    }

    console.log(this.state.titles)
    return (
      <div>
        <p>Titles </p>
        <div className="col-sm-6">
          {titles}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addTitle: addTitle,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Titles)
