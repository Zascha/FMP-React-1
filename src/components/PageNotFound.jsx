import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="page-not-found-conainer">
            <img src="/sources/404-error.svg"></img>
            <span>Page Not Found</span>
            <Link to="/films">Go to Start Page</Link>
        </div>
    );
}

export default PageNotFound;