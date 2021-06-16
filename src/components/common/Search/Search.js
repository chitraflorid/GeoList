import React, {useContext, useCallback, useEffect } from 'react';

import './search.css';

export const Search = ({ type, handleSearch }) => {
    const placeHolder = `Search ${type.charAt(0).toUpperCase()}${type.slice(1)}..`;
    
    // const delayedQuery = useCallback(debounce(q => setCountryFilter(q), 300), []);
    const handleInputChange = e => {
        console.log("handle Search!!!");
        handleSearch(e.target.value);
    };
    
    return (
        <div className="searchContainer">
            <input type="search" placeholder={placeHolder} className="searchInput" onInput={handleInputChange} />
        </div>
    );
};
