import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

import Movie from '../components/Movie';
import MoviesSuggestions from '../containers/MoviesSuggestions';

class MoviesHome extends Component {
    render = () => {
        const { movie } = this.props;

        if(!movie){
            return <Redirect to="" />;
        }

        return (
            <div className="movie-page-container">
                <Movie movie={movie} />
                <Link className="movie-page-container__back" to="/films">
                    <img src='/sources/search.svg'/>
                </Link>                
                <MoviesSuggestions movie={movie}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.movies.find(m => m.id === Number(ownProps.match.params.id))
    }
}

export default withRouter(connect(mapStateToProps)(MoviesHome));