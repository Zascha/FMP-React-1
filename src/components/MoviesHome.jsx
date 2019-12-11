import React, { Component } from "react";

import ErrorBoundary from '../containers/ErrorBoundary';
import MoviesSearchForm from '../containers/MoviesSearchForm';
import MoviesList from '../containers/MoviesList';

const MoviesHome = () => {
    return (
        <ErrorBoundary>
            <MoviesSearchForm />
            <MoviesList />
            <div className="footer">
                <img src="sources/logo.png"/>
            </div>
        </ErrorBoundary>        
    );
}

export default MoviesHome;