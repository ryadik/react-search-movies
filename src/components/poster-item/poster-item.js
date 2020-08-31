import React from "react";

import './poster-item.sass'

const PosterItem = ({imdbID, title, year, url, id}) => {
  return (
      <div className="poster" key={id}>
        <div className="poster__img"><img src={url} alt="movie poster"/></div>
        <div className="poster__description">
          <div className="text">
            <h3><a href={`https://www.imdb.com/title/${imdbID}`} target="_blank">{title}</a>,</h3>
            <span>{year}</span>
          </div>
        </div>
      </div>
  )
}

export default PosterItem
