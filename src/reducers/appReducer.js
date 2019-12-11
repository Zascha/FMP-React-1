import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './moviesReducer';
import moviesSuggestions from './moviesSuggestionsReducer';
import paging from './pagingReducer';

export default combineReducers({
    routing: routerReducer,    
    moviesSuggestions,
    movies,
    paging
})