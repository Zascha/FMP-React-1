function moviesList(state = [], action) {
    switch (action.type) {
        case 'SET_PAGE_MOVIES':
            return action.movies;
        default:
            return state;
    }
};

function moviesSuggestionsList(state = [], action) {
    switch (action.type) {
        case 'SET_MOVIES__SUGGESTIONS':
            return action.movies;
        default:
            return state;
    }
};

export default moviesList;
