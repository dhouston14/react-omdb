import React, {Component} from 'react';
// import Search from './Search';
// import SearchContainer from './SearchContainer';

class Results extends Component {
  render() {
    let {movies} = this.props;
    let results = movies.map((movie, index) => {
      return (
        <div key={index}>
          <img src={movie.poster_url} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
    )
  })
    return (
      <div>
        {results}
      </div>
    )
  }
}


export default Results
