import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchMovies, fetchMoviesSuggestions } from '../actions/searchAction'
import { searchMovies } from '../services/searchService'

const mockStore = configureMockStore([thunk]);

const currentPage = 1;
const totalValue = 2;
const moviesList = [
    {
        id: 1,
        title: "Title A",
        description: "Description A",
        slogan: "Slogan A",
        releaseDate: "2000-01-01",
        imgUrl: "https://imagestorage/imgA.jpg"
    },
    {
        id: 2,
        title: "Title B",
        description: "Description B",
        slogan: "Slogan B",
        releaseDate: "2000-01-01",
        imgUrl: "https://imagestorage/imgB.jpg"
    }
]

jest.mock('../services/searchService');
searchMovies.mockImplementation(() => {
    return new Promise((resolve, reject) => {
        resolve({
            page: currentPage,
            total: totalValue,
            movies: moviesList
        });
    });
});

describe('>>> TEST ACTION: searchAction', () => {
    it('>> Test aync_fetchMovies', () => {
        const store = mockStore([]);

        const expectedActions = [
            { type: "SET_CURRENT_PAGE", currentPage: currentPage },
            { type: "SET_TOTAL", total: totalValue },
            { type: "SET_PAGE_MOVIES", movies: moviesList }
        ]

        return store.dispatch(fetchMovies())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
    it('>> Test fetchMoviesSuggestions', () => {
        const store = mockStore([]);

        const expectedActions = [
            { type: "SET_MOVIES_SUGGESTIONS", movies: moviesList }
        ]

        return store.dispatch(fetchMoviesSuggestions())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});