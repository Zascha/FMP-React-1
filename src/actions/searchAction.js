import { searchMovies } from '../services/searchService'
import { setPageMovies, setMoviesSuggestions } from './moviesAction'
import { setCurrentPage, setTotal } from './pagingAction'

export function fetchMovies(searchParams) {
    return function (dispatch) {
        return searchMovies(searchParams)
                .then((data) => {
                    dispatch(setCurrentPage(data.page));
                    dispatch(setTotal(data.total));
                    dispatch(setPageMovies(data.movies));
                })
                .catch((err) => {
                    console.log("fetchInitMovies error.", err);
                });
    }
}

export function fetchMoviesSuggestions(searchParams) {
    return function (dispatch) {
        return searchMovies(searchParams)
                .then((data) => {
                    dispatch(setMoviesSuggestions(data.movies));
                })
                .catch((err) => {
                    console.log("fetchMoviesSuggestions error.", err);
                });
    }
}
