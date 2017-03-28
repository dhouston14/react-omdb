import React, { Component } from 'react';
// import Search from './Search';
import SearchContainer from './SearchContainer';


class Home extends Component {
  render() {
    return(
      <div>
        <h2>Welcome to the Movies Boi!</h2>
        <h3><a href="/">OMDB React</a></h3>
        <SearchContainer />
      </div>
    )
  }
}

// <Search />
// asdasda

export default Home
