import * as constants from '../classes/constants'
import Movie from '../classes/Movie'

export function toMovie(responseObject){
    return converJsonObjectToMovieObject(responseObject);
}

export function toMoviesArray(responseArrayObject){
    return responseArrayObject.map(function (item) {
        return converJsonObjectToMovieObject(item);
    });
}

export function toMoviesResponse(responseObject){
    return {
        movies: responseObject[constants.jsonMoviesObjectDataKey].map(function (item) {
            return converJsonObjectToMovieObject(item);
        }),
        total: responseObject[constants.jsonTotalKey],
        page: responseObject[constants.jsonPageKey] + 1
    };
}

function converJsonObjectToMovieObject(jsonObject) {
    return new Movie(
        jsonObject[constants.jsonMovieObjectIdKey],
        jsonObject[constants.jsonMovieObjectTitleKey],
        jsonObject[constants.jsonMovieObjectDescriptionKey],
        jsonObject[constants.jsonMovieObjectSloganKey],
        jsonObject[constants.jsonMovieObjectReleaseDateKey],
        jsonObject[constants.jsonMovieObjectImgUrlKey],
        jsonObject[constants.jsonMovieObjectGenresKey],
        jsonObject[constants.jsonMovieObjectBudgetKey],
        jsonObject[constants.jsonMovieObjectRevenueKey],
        jsonObject[constants.jsonMovieObjectVotesAvgKey],
        jsonObject[constants.jsonMovieObjectVotesCountKey],
        jsonObject[constants.jsonMovieObjectRuntimeKey]
    );
}