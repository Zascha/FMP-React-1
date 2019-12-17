import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';

import { fetchMovies } from '../actions/searchAction';
import { setCurrentPage } from '../actions/pagingAction';
import SearchParams from '../classes/SearchParams';
import * as consts from '../classes/constants';

class MoviesSearchForm extends Component {
    constructor(props) {
        super(props);
        const queryParams = new URLSearchParams(props.location.search);

        this.state = {
            search: queryParams.get('search'),
            searchField: queryParams.get('searchBy'),
            sortField: queryParams.get('sortBy'),
            currentPage: queryParams.get('page') ? parseInt(queryParams.get('page')) : 1,
        }

        this.updateStateSearchValue = this.updateStateSearchValue.bind(this);
        this.updateStateSearchFieldValue = this.updateStateSearchFieldValue.bind(this);
        this.updateStateSortFieldValue = this.updateStateSortFieldValue.bind(this);
    }

    componentDidMount() {
        this.searchPageMoviesOnPageLoad();

        var searchField = this.state.searchField;

        $("document").ready(function(){
            $('.search-form-container__search-by-filter .search-form-button').each(() =>{
                $(this).removeClass('selected');
                //if($(this).attr('data-value') == searchField){
                 //   $(this).addClass('selected');
                //}
            });
        });

        $(".search-form-button").click(function () {
            $(this).siblings(".search-form-button").each(function () {
                $(this).removeClass('selected');
            });
            $(this).addClass('selected');
        });
    }

    componentDidUpdate(){
        this.searchPageMoviesOnPageLoad();
    }

    updateStateSearchValue({ target }) {
        this.setState({
            search: target.value
        });
    }

    updateStateSearchFieldValue(searchValue) {
        this.setState({
            searchField: searchValue
        });
    }

    updateStateSortFieldValue(searchValue) {
        this.setState({
            sortField: searchValue
        });
    }

    searchPageMoviesOnPageLoad(){
        const { onSetCurrentPage, onSearchPageMovies } = this.props;
        var searchParams = new SearchParams(this.state.currentPage, this.state.search, this.state.searchField, this.state.sortField);

        onSetCurrentPage(this.currentPage);
        onSearchPageMovies(searchParams);
    }

    runSearchBySubmitSearchValue() {
        const { onSetCurrentPage } = this.props;

        this.props.history.push({
            pathname: '/films',
            search: this.getRedirectUrl('search', this.searchInput.value)
        });

        onSetCurrentPage(1);
        this.searchInput.value = "";
    }

    runSearchBySubmitSearchValueByEnter(e) {
        if (e.key === 'Enter') {
            this.runSearchBySubmitSearchValue();
        }
    }

    runSearchWithSearchFieldSet(searchField) {
        this.updateStateSearchFieldValue(searchField);

        const { onSetCurrentPage } = this.props;

        this.props.history.push({
            pathname: '/films',
            search: this.getRedirectUrl('searchBy', searchField)
        });

        onSetCurrentPage(1);
    }

    runSearchWithSortFieldSet(sortField) {
        this.updateStateSortFieldValue(sortField);

        const { onSetCurrentPage } = this.props;

        this.props.history.push({
            pathname: '/films',
            search: this.getRedirectUrl('sortBy', sortField)
        });

        onSetCurrentPage(1);
    }

    getRedirectUrl(param, value){
        var searchUrl = this.props.location.search;
        var regex = new RegExp('(?<=' + param + '=)[a-z_]+');

        return searchUrl.includes(param)
        ? searchUrl.replace(regex, value)
        : searchUrl +'&' + param + '=' + value;
    }

    render = () => {
        const { totalResultsCount } = this.props;
        return (
            <div className="search-form-container">
                <img className="search-form-container__logo" src="sources/logo.png" />
                <div className="search-form-container__top">
                    <div className="search-form-container__search-input-text">Find your movie</div>
                    <div className="search-form-container__search-input">
                        <input type="text" placeholder="Search movie" 
                                onChange={this.updateStateSearchValue.bind(this)}
                                onKeyPress={this.runSearchBySubmitSearchValueByEnter.bind(this)} />
                        <button type="button" onClick={this.runSearchBySubmitSearchValue.bind(this)}>Search </button>
                    </div>
                    <div className="search-form-container__search-by-filter">
                        <div className="search-form-info">Search by</div>
                        <button className="search-form-button selected" data-value="title" type="button"
                                onClick={() => this.runSearchWithSearchFieldSet(consts.jsonMovieObjectTitleKey)}>Title </button>
                        <button className="search-form-button" data-value="genres" type="button"
                                onClick={() => this.runSearchWithSearchFieldSet(consts.jsonMovieObjectGenresKey)}>Genre </button>
                    </div>
                </div>
                <div className="search-form-container__bottom">
                    <div className="search-form-container__total-results">
                        <span>{totalResultsCount} movies count</span>
                    </div>
                    <div className="search-form-container__sort-by-filter" >
                        <div className="search-form-info">Sort by</div>
                        <button className="search-form-button" type="button" onClick={() => this.runSearchWithSortFieldSet(consts.jsonMovieObjectReleaseDateKey)}>Release date </button>
                        <button className="search-form-button selected" type="button" onClick={() => this.runSearchWithSortFieldSet(consts.jsonMovieObjectVotesAvgKey)}>Rating </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        totalResultsCount: state.paging.total
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        onSearchPageMovies: (searchParams) => {
            dispatch(fetchMovies(searchParams));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesSearchForm));