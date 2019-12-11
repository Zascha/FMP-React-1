import * as consts from './constants'

export default class SearchParams {
    constructor(page, searchValue, searchField, sortField, sortOrder, genreFilter) {
        this.searchValue = searchValue || "";
        this.searchField = searchField || consts.jsonMovieObjectTitleKey;
        this.sortField = sortField || consts.jsonMovieObjectVotesAvgKey;
        this.sortOrder = sortOrder || "desc";
        this.genreFilter = genreFilter || [];
        this.skip = page > 0 ? (page - 1) * consts.defaultPageSize : 0;
    }
}