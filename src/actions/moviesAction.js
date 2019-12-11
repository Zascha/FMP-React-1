export function setPageMovies(movies) {
    return {
        type: 'SET_PAGE_MOVIES',
        movies: movies
    }
}

export function setMoviesSuggestions(movies) {
    return {
        type: 'SET_MOVIES_SUGGESTIONS',
        movies: movies
    }
}