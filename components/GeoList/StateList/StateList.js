import React, { useContext } from 'react';
import { GeoContext } from '..';
import { InfoIcon, ArrowForwardIcon } from '../../common/ActionIcons';
import '../listItem.css';

export const StateItem = (({id, name, iso2, cities}) => {  
    const geoContext = useContext(GeoContext);
    const { loadCities, setCurrentStateId} = geoContext;
   
    const handleArrowClick = event => {
        setCurrentStateId(id)
        loadCities();
        loadCities(cities);
    };
  return (
    <li className="state">
      <div>{name}</div>
      <div>{iso2}</div>
      <div>
          <InfoIcon title="State Info" />
          <ArrowForwardIcon title="Show Cities" handleClick={handleArrowClick} />
      </div>
    </li>
  );
});
