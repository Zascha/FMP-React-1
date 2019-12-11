function pagingParams(state =
    {
        currentPage: 0,
        total: 0
    },
    action) {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL':
            return {
                ...state,
                total: action.total
            };
        default:
            return state;
    }
};

export default pagingParams;
