import React from 'react'
import MovieCard from './MovieCard'

function MovieList({ videos }) {



    if (videos.length === 0) {
        return (<div className="no_movies_alert">Movies Display Here!</div>)
    }

    return (
        <div>
            <h1>Movie List</h1>
            <div className="flex">
            {videos.map((video) => (
          <MovieCard
            key={video.imdbID}
            poster={video.Poster}
            title={video.Title}
            type={video.Type}
          />
        ))}
            </div>
        </div>
    );
}

export default MovieList
