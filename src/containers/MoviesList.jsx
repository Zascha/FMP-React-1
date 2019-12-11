import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import MovieDashboard from '../components/MovieDashboard';

class MoviesList extends Component {
    render = () => {
        const { movies } = this.props;

        return (
            <div className="movies-list-container">                
                {movies.length > 0 &&
                    movies.map((movie, index) =>
                        <Link to={`/film/${movie.id}`} key={index}>
                            <MovieDashboard movie={movie} />
                        </Link>
                    )
                }
                 {movies.length === 0 &&
                    <span className="movies-list-container__no-results">No Films Found</span>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MoviesList);