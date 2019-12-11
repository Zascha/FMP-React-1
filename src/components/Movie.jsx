import React from "react";

const Movie = (props) => {
    const movie = props.movie;

    return (
        <div className="movie-container">
            <img className="movie-container__logo" src="/sources/logo.png" />            
            <img className="movie-container__image" src={movie.imgUrl} />
            <div className="movie-container__data">
                <div className="movie-container__title-block">
                    <span className="movie-container__title-block-title">{movie.title}</span>
                    <span className="movie-container__title-block-votes-avg">{movie.votesAvg}</span>
                </div>
                <div className="movie-container__slogan">{movie.slogan}</div>
                <div className="movie-container__year-block">
                    <span className="movie-container__title-block-year">{new Date(movie.releaseDate).getFullYear()}</span>
                    <span className="movie-container__title-block-time">{movie.runtime}m</span>
                </div>
                <div className="movie-container__description">{movie.description}</div>
            </div>
        </div>
    );
}

export default Movie;