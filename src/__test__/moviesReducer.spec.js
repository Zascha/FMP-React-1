import moviesReducer from '../reducers/moviesReducer'
import moviesSuggestionsReducer from '../reducers/moviesSuggestionsReducer'

const movies = [
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

describe('>>> TEST REDUCER: moviesReducer', () => {
    it('>> Test SET_PAGE_MOVIES', () => {
        const testAction = {
            type: "SET_PAGE_MOVIES",
            movies: movies
        };
        expect(moviesReducer({}, testAction)).toEqual(movies);
    });
    it('>> Test SET_MOVIES_SUGGESTIONS', () => {
        const testAction = {
            type: "SET_MOVIES_SUGGESTIONS",
            movies: movies
        };
        expect(moviesSuggestionsReducer({}, testAction)).toEqual(movies);
    });
});