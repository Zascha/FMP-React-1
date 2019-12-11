import './styles/app.scss';

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import { fetchMovies } from './actions/searchAction';
import reducer from './reducers/appReducer';

import PageNotFound from './components/PageNotFound';
import MoviesHome from './components/MoviesHome';
import MoviePage from './containers/MoviePage';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/films:search?:page?"><MoviesHome /></Route>
                <Route path="/film/:id"><MoviePage /></Route>
                <Route ><PageNotFound /></Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("container")
);