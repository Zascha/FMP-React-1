import { setPageMovies, setMoviesSuggestions } from '../actions/moviesAction'

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

describe('>>> TEST ACTION: moviesAction', () => {
    it('>> Test setPageMovies', () => {
        const pageMovies = setPageMovies(moviesList);
        expect(pageMovies).toEqual({ type: "SET_PAGE_MOVIES", movies: moviesList });
    });
    it('>> Test setMoviesSuggestions', () => {
        const moviesSuggestions = setMoviesSuggestions(moviesList);
        expect(moviesSuggestions).toEqual({ type: "SET_MOVIES_SUGGESTIONS", movies: moviesList });
    });
});