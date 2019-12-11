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
        const { onSetCurrentPage, onSearchPageMovies } = this.props;
        var searchParams = new SearchParams(this.state.currentPage, this.state.search, this.state.searchField, this.state.sortField);

        onSetCurrentPage(this.currentPage);
        onSearchPageMovies(searchParams);

        $(".search-form-button").click(function(){
            $(this).siblings(".search-form-button").each(function(){
                $(this).removeClass('selected');
            });
            $(this).addClass('selected');
        });
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

    searchData() {
        const { onSetCurrentPage, onSearchPageMovies } = this.props;
        var searchParams = new SearchParams(1, this.state.search, this.state.searchField, this.state.sortField);
        onSetCurrentPage(1);
        onSearchPageMovies(searchParams);

        this.searchValue = "";
    }

    searchDataByEnter(e) {
        if (e.key === 'Enter') {
            this.searchData();
        }
    }

    searchDataBy(searchField) {
        this.updateStateSearchFieldValue(searchField);

        const { onSetCurrentPage, onSearchPageMovies } = this.props;
        var searchParams = new SearchParams(1, this.state.search, searchField, this.state.sortField);
        onSetCurrentPage(1);
        onSearchPageMovies(searchParams);
    }

    searchSortedData(sortField) {
        this.updateStateSortFieldValue(sortField);
        
        const { onSetCurrentPage, onSearchPageMovies } = this.props;
        var searchParams = new SearchParams(1, this.state.search, this.state.searchField, sortField);
        onSetCurrentPage(1);
        onSearchPageMovies(searchParams);
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
                               onKeyPress={this.searchDataByEnter.bind(this)} />
                        <button type="button" onClick={this.searchData.bind(this)}>Search </button>
                    </div>
                    <div className="search-form-container__search-by-filter">
                        <div className="search-form-info">Search by</div>
                        <button className="search-form-button selected" type="button" onClick={() => this.searchDataBy(consts.jsonMovieObjectTitleKey)}>Title </button>
                        <button className="search-form-button" type="button" onClick={() => this.searchDataBy(consts.jsonMovieObjectGenresKey)}>Genre </button>
                    </div>
                </div>
                <div className="search-form-container__bottom">
                    <div className="search-form-container__total-results">
                        <span>{totalResultsCount} movies count</span>
                    </div>
                    <div className="search-form-container__sort-by-filter" >
                        <div className="search-form-info">Sort by</div>
                        <button className="search-form-button" type="button" onClick={() => this.searchSortedData(consts.jsonMovieObjectReleaseDateKey)}>Release date </button>
                        <button className="search-form-button selected" type="button" onClick={() => this.searchSortedData(consts.jsonMovieObjectVotesAvgKey)}>Rating </button>
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