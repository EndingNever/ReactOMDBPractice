import React from 'react'

function MovieCard( { poster, title, type } ) {
    return (
        <div className="movie-card">
            <img className="movie-card__poster" 
            src={poster} 
            alt={title} 
        />
            <div className="movie-card__title">
                {title}
            </div>
            <div className="movie-card__type">  
                {type}
            </div>
        </div>
    )
}

export default MovieCard
