import React from 'react'


function MovieDetails( {movie} ) {
    console.log(movie)
    return (
    <article className="movie">
      <div className="movie__left-col">
        <img
          className="movie__poster"
          src={movie.Poster}
          alt={movie.Title}
          title={movie.Title}
        />
      </div>
      <div className="movie__right-col">
        <div className="">
          <div className="movie__rating">{movie.imdbRating}</div>
          <h2 className="movie__title">{movie.Title}</h2>
        </div>

        <ul className="movie__tags">
          <li>{movie.Rated}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Genre}</li>
        </ul>

      </div>
    </article>

    )
}

export default MovieDetails
