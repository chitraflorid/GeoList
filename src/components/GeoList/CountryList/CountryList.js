import React, { useContext, useEffect} from 'react';
import { CountryItem } from '.';
import { Header, Search} from '../../common';
import { GeoContext } from '..';

import '../geolist.css';

export const CountryList = () => {
    const type = "countries";
      
    const geoContext = useContext(GeoContext);
 
    const { loadCountries, loading, countryList, setCountryFilter } = geoContext;
  
    useEffect(() => {
        loadCountries();
    }, []);
  
    return (
        <div className="listContainer">
            <Header type={type} />
            <Search type={type}  handleSearch={setCountryFilter} />
        {
             !loading ? (
                <ul className="list">
                    {
                        countryList.map(item => {
                            return <CountryItem 
                                key={item.id}
                                id={item.id}
                                emojiU={item.emojiU}
                                name={item.name}
                                iso2={item.iso2}
                                states={item.states} />
                        })
                    }
                </ul>
            ) : (
                <div>Loading...</div>
            )
        }
    </div>
  );
};

