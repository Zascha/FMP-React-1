function moviesSuggestionsList(state = [], action) {
    switch (action.type) {
        case 'SET_MOVIES_SUGGESTIONS':
            return action.movies;
        default:
            return state;
    }
};

export default moviesSuggestionsList;
