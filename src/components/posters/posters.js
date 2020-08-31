import React, {Component} from "react";

import PosterItem from "../poster-item/poster-item";

import './posters.sass'

class Posters extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  generatorKey = () => {
    return Math.random().toString(36).substr(6)
  }

  render() {
    const {movie, error} = this.props

    if (error) {
      return (
          <div className="posters">
            <h2>Movies</h2>
            <h3>{error}</h3>
          </div>
      )
    }

    const movieItems = (movie.length > 0) ? movie.map(item => <PosterItem imdbID={item.imdbID}
                                                                           title={item.Title}
                                                                           year={item.Year}
                                                                           url={item.Poster}
                                                                           key={this.generatorKey()}
                                                                           id={this.generatorKey()}
    />) : []

    return (
      <View elems={movieItems} />
    )
  }
}

const View = ({elems}) => {
  return (
      <div className="posters">
        <h2>Movies</h2>
        <div className="posters__container">
          {(elems.length > 0) ? elems : ''}
        </div>
      </div>
  )
}
export default Posters
