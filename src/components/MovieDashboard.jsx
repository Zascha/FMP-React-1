import React from "react";

const MovieDashboard = (props) => {
    const movie = props.movie;

    return (
        <div className="movie-dashboard-item" key={movie.id}>
            <img className="movie-dashboard-item__image" src={movie.imgUrl}/>
            <div className="movie-dashboard-item__data">
                <div className="movie-dashboard-item__title"> {movie.title} </div>
                <div className="movie-dashboard-item__genres"> {movie.genres.join(' & ')}</div>
                <div className="movie-dashboard-item__year">{new Date(movie.releaseDate).getFullYear()} </div>
            </div>
        </div>
    );
}

export default MovieDashboard;