import React from "react";
import api from "../../utils/api";
import MoviesList from "../MovieList/MoviesList"
import Header from "../Header/Header"
import '../../css/styles.css';
import '../../css/bulma.css';
import { Link } from "react-router-dom";

const { getMovie, findMovie } = api();



export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

    this.myMovies();
  }

myMovies = () => {
    getMovie().then(movie =>
      this.setState({
        movies: movie
      })
    );
  };



  search = (event) => {
    const query = event.target.value;
    if (query !== ''){
      return findMovie(query).then(movie => this.setState({
        movies: movie
      }))
    }
    this.myMovies();
    
  
    
  }

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
      <nav class="navbar is-dark is-fixed-top">
      <div class="navbar-brand">
      
        
      </div>
        <div class="navbar-end">
            <div class="navbar-item">
              <form id="search-form" class="field has-addons" >
                  <input class="input search control is-hoverable" type="text" placeholder="Search movie" onKeyUp={this.search}/>
                  
                  <button type="submit" class="control button is-warning">Search</button>
            </form>
          </div>
        </div>
    </nav>
        

        {movies && <MoviesList movies={movies} />}
      </React.Fragment>
    );
  }
}
