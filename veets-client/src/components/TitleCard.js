import React from 'react';

class TitleCard extends React.Component {
  render() {

    if (this.props.columns === 1) {
      var classRows = "well"
    } else {
      // eslint-disable-next-line
      var classRows = "well col-sm-6"
    }

    return (
      <div className={classRows}>
        <h2>{this.props.name}</h2>
        <img src={this.props.coverImage.medium} alt="cover"/>
        <h4>Ranking: {this.props.popularityRank} Ratings: {this.props.averageRating}</h4>
        <p>Episodes: {this.props.episodeCount}</p>
        <p>Synopsis: {this.props.synopsis}</p>
      </div>
    )
  }
}

export default TitleCard
