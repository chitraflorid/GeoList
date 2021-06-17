import React, { useReducer } from 'react';
import { debounce } from 'lodash';

import { GeoContext } from './context/geoContext';
import { geoReducer } from './reducer/geoReducer';

export const GeoProvider = ({ children }) => {
    const initialState = {
        countryList: [],
        stateList: [] ,
        cityList: [],
        countryFilter: '',
        stateFilter: '',
        cityFilter: '',
        loading: true,
        type: 'countries',
        currentCountryId: null,
        currentStateId: null,
    };

    const [state, dispatch] = useReducer(geoReducer, initialState);

    // Get all Countries
    const loadCountries = async () => {        
        try {
            dispatch({ type: 'SEND_REQUEST' });
            const res = await fetch('data/countries+states+cities.json', {
             headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
           });

            const data = await res.json();
            dispatch({ type: 'HANDLE_REQUEST_SUCCCESS' });
            dispatch({ type: 'LOAD_COUNTRIES', payload: data });
        } catch (err) {
            console.log(err);
        }
    };
    
    const setCountryFilter = searchFilter => {
        console.log("@set Country Filter")
        if (!searchFilter) {
            setCurrentStateId(null);
            setCurrentCountryId(null);
            setStateFilter();
            setCityFilter();
            loadCountries();
            loadStates();
            loadCities();

        }
        dispatchFilter('SET_COUNTRY_FILTER', searchFilter, "FILTER_COUNTRIES", state.countryList);
    };

    const setStateFilter = searchFilter => {
        if (!searchFilter) {
            setCurrentStateId(null);
            loadStates();
            loadCities();
        }
        
        dispatchFilter('SET_STATE_FILTER', searchFilter, "FILTER_STATES", state.stateList);
    };
    
    const setCityFilter = searchFilter => {
        if (!searchFilter) {
            loadCities();
        }
        dispatchFilter('SET_CITY_FILTER', searchFilter, "FILTER_CITIES", state.cityList);
    };
    
    const dispatchFilter = (setFilterAction, searchFilter, filterAction, list) => {
        dispatch({type: setFilterAction, payload: searchFilter});
        
        if (searchFilter) {
            const data =  list.length ? list.filter(item => item.name.toLowerCase().startsWith(searchFilter.toLowerCase())) : [];
            dispatch({type: filterAction, payload: data});
        }
    };
        
    const loadStates = states => {
        const {currentCountryId} = state;
                
        if (!states && currentCountryId) {
            states = state.countryList.filter(item => item.id === currentCountryId)[0]?.states;
        }
        
        dispatch({ type: 'LOAD_STATES', payload: states });
    }
    
    const loadCities = (cities) => {
        const {currentStateId} = state;
                
        if (!cities && currentStateId) {
            cities = state.stateList?.filter(item => item.id === currentStateId)[0]?.cities;
        }
        
        dispatch({ type: 'LOAD_CITIES', payload: cities });
    }
    
    const setCurrentCountryId = countryId => {
        dispatch({ type: 'SET_CURRENT_COUNTRY', payload: countryId });
    };
    
    const setCurrentStateId = stateId => {
        dispatch({ type: 'SET_CURRENT_STATE', payload: stateId });
    };

    return (
        <GeoContext.Provider
            value={{
                countryList: state.countryList,
                stateList: state.stateList,
                cityList: state.cityList,
                loading: state.loading,
                type: state.type, 
                loadCountries,
                loadStates,
                loadCities,
                setCurrentCountryId,
                setCurrentStateId,
                setCountryFilter: debounce(setCountryFilter, 300),
                setStateFilter: debounce(setStateFilter, 300),
                setCityFilter: debounce(setCityFilter, 300),
            }}
        >
            {children}
        </GeoContext.Provider>
    );
};
