import React, {Component} from "react";

import Header from "./components/header/header";
import Search from "./components/search/search";
import Posters from "./components/posters/posters";

import './App.css'
import {getMovie} from "./services/getMovie";

class App extends Component{
  state = {
    movie: [],
    error: ''
  }

  getData = (text) => {
    getMovie(text)
        .then(res => {
          if (res.Response === 'False') {
            this.setState({
              error: res.Error,
              movie: []
            })
          } else {
            this.setState({
              movie: res.Search,
              error: ''
            })
          }
        })
  }

  render() {
    return (
        <div className="wrapper">
          <Header/>
          <Search getData={this.getData}/>
          <Posters movie={this.state.movie} error={this.state.error}/>
        </div>
    )
  }

}
export default App
