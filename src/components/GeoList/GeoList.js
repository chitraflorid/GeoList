import React from 'react';
import { CountryList, StateList, CityList } from '.';
import './geolist.css';

export const GeoList = () => {  
    return (
        <div className="flexContainer">
            <CountryList />
            <StateList />
            <CityList />
        </div>  
    );
};
