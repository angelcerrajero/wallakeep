import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import Movie from '../Movies/Movies'


export default class MovieList extends Component {

render() {
  const baseUrl = 'https://image.tmdb.org/t/p/w300/'

    console.log(this.props.movies);    
    return (
    <React.Fragment>
    <div className= "card-grid">
      {this.props.movies.map(movie => (
        <div key={movie.id} className="card">
          <header className="card-header">
            <Link to={`/detail/${movie.id}`} className="card-header-title">{movie.original_title} </Link>
            <div className="card-header-icon" aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </div>
          </header>
          <div className="card-content">
            <img className="img-cerve" src={`${baseUrl}${movie.poster_path}`} alt="" />
            <div className="content">
              <u>
                <h6>Description</h6>
              </u>
              <p>{movie.overview}</p>
              <br />
              <time>Release: {movie.release_date}</time>
              <br />
              <p>Score: {movie.vote_average} </p>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">Total Votes: {movie.vote_count}</div>
            <div className="card-footer-item">Popularity: {movie.popularity}</div>
          </footer>
        </div>
        
      ))}
      </div>
    </React.Fragment>
  );
  }





}