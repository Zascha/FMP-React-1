import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMoviesSuggestions } from '../actions/searchAction';
import SearchParams from '../classes/SearchParams.js';
import MovieDashboard from '../components/MovieDashboard';

class MoviesSuggestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovieId: props.movie.id,
            genres: props.movie.genres
        }
    }

    componentDidMount() {
        const { onFetchMoviesSuggestions } = this.props;
        onFetchMoviesSuggestions(this.state.genres);
    }

    render = () => {
        const { movies } = this.props;

        return (
            <div className="movies-suggestions-container">
                <div className="movies-suggestions-container__header">
                    Filmes by {this.state.genres.join(" & ")} genre
                </div>
                <div className="movies-suggestions-container__suggestions">
                    {
                        movies.filter(item => item.id != this.state.currentMovieId).map((movie, index) =>
                            <Link to={`/film/${movie.id}`} key={index}>
                                <MovieDashboard movie={movie} />
                            </Link>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesSuggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMoviesSuggestions: (genres) => {
            var searchParams = new SearchParams();
            searchParams.genreFilter = genres;

            dispatch(fetchMoviesSuggestions(searchParams));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSuggestions);