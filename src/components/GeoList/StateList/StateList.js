import React, { useContext, useEffect } from 'react';
import { StateItem } from '.';
import { GeoContext } from '..';
import { Header, Search} from '../../common';

import '../geolist.css';

export const StateList = () => {
    const type = "states";
    
    const geoContext = useContext(GeoContext);
    const {loadStates, loading, stateList, stateFilter, setStateFilter } = geoContext;
  
    useEffect(() => {
         loadStates();
    }, []);
 
    return (
        <div className="listContainer">
            <Header type={type} />
            <Search type={type} handleSearch={setStateFilter} />
        {
            !loading ? (
                <ul className="list">
                    {
                       stateList ? (
                            stateList.map(item => {
                                return <StateItem 
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    iso2={item.iso2}
                                    cities={item.cities} />
                                })
                        ) : (
                            <li className="info">No States!!</li>
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
