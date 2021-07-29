import React, { useContext, useEffect } from 'react';
import { CityItem } from '.';
import { Header, Search} from '../../common';
import { GeoContext } from '..';

import '../geolist.css';

export const CityList = () => {
    const type = "cities";
    const geoContext = useContext(GeoContext);
    const { loadCities, loading, cityList, cityFilter, setCityFilter } = geoContext;
  
    useEffect(() => {
        // console.log('Initial Loading of Cities');
        loadCities();
    }, []);
 
     return (
        <div className="listContainer">
            <Header type={type} />
            <Search type={type}  handleSearch={setCityFilter} />
        {
            !loading ? (
                <ul className="list">
                    {
                        cityList ? (
                                cityList.map(item => {
                                    return <CityItem 
                                        key={item.id}
                                        name={item.name} />
                                })
                            
                        ) : (
                            <li className="info"> No Cities!!</li>
                        )
                    }
                </ul>
            ) : (
                <div>Loading...</div>
            )
        }
    </div>
  );
};
