import React, {useState} from "react";

import './search.sass'

const Search = ({getData}) => {

  const [searchValue, setSearchValue] = useState('')

  return (
      <div className="search">
          <input type="text"
                 className="search__input"
                 placeholder="Type a movie name"
                 onChange={(e) => setSearchValue(e.target.value)}
                 onKeyDown={(e) => {
                   if (e.which === 13 || e.key === 'Enter') {
                     getData(searchValue)
                   }
                 }}
          />
          <button
              onClick={() => getData(searchValue)}
              className="search__submit">
            Search
          </button>
      </div>
  )
}

export default Search
