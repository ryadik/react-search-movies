import React from "react";

import './header.sass'

const Header = () => {
  return (
      <header className="app-header">
        <div className="app-header__wrapper">
          <div className="app-header__logo">
            <h2>Search Movies</h2>
          </div>
          <nav className="app-header__nav">
            <ul className="app-header__links">
              <li><a href='https://github.com/K1nGsmaN-hub'>Github</a></li>
              <li><a href="https://www.omdbapi.com/">API</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}
export default Header
