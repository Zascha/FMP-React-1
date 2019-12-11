import 'babel-polyfill';
import * as constants from '../classes/constants';
import * as mapping from '../mappers/movieMapper';

const searchBaseUrl = 'https://reactjs-cdp.herokuapp.com/movies?limit=';
const getByIdBaseUrl = 'https://reactjs-cdp.herokuapp.com/movies/';

export function searchMovies(searchParams) {
    var searchUrl = formSearchUrl(searchParams);
    var response = getMoviesAsync(searchUrl);
    
    return response.then(response => mapping.toMoviesResponse(response));
}

export function searchMovieById(movieId){
    var searchUrl = getByIdBaseUrl + movieId;
    var response = getMoviesAsync(searchUrl);
    
    return response.then(data => mapping.toMovie(data));
}

async function getMoviesAsync(searchUrl) {
    let response = await fetch(searchUrl);
    let data = await response.json()
    return data;
}

function formSearchUrl(searchParams) {
    var url = searchBaseUrl + constants.defaultPageSize;

    if(!searchParams){
        return url;
    }

    url = getUrlWithNewRequestUrlParam(url, constants.requestSearchValueParam, searchParams.searchValue);
    url = getUrlWithNewRequestUrlParam(url, constants.requestSearchByParam, searchParams.searchField);
    url = getUrlWithNewRequestUrlParam(url, constants.requestSortByParam, searchParams.sortField);
    url = getUrlWithNewRequestUrlParam(url, constants.requestSortOrderParam, searchParams.sortOrder);
    url = getUrlWithNewRequestUrlParam(url, constants.requestGenresFilterParam, searchParams.genreFilter);
    url = getUrlWithNewRequestUrlParam(url, constants.requesSkipRowsParam, searchParams.skip);

    return url;
}

function getUrlWithNewRequestUrlParam(urlString, urlParam, urlParamValue) {
    if (urlParamValue && urlParamValue.length !== 0) {
        urlString += "&" + urlParam + "=" + urlParamValue;
    }

    return urlString;
}