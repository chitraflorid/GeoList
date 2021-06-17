import React, { useContext, useState } from 'react';
import { GeoContext } from '..';
import { InfoIcon, ArrowForwardIcon } from '../../common/ActionIcons';
import '../listItem.css';

export const StateItem = (({id, name, iso2, cities}) => {  
    const geoContext = useContext(GeoContext);
    const { loadCities, setCurrentStateId} = geoContext;
    const [active, setActive] = useState(false);

    const handleStateClick = event => {       
        if (event.currentTarget.id === id) {
            setActive(true);
        } else {
            setActive(false);
        }
                 
        if (event.target.closest("[name*='arrow']")) {
            setCurrentStateId(id)
            loadCities();
            loadCities(cities);
        } else {
            console.log("Info Icon Clicked!!!!");
        }
        console.log(event.currentTarget.id);

    };
    
  return (
      <li id={id} className={active ? "state active": "state"}  onClick={handleStateClick}>
          <div>{name}</div>
          <div>{iso2}</div>
          <div>
              <InfoIcon title="State Info" />
              <ArrowForwardIcon title="Show Cities" />
          </div>
    </li>
  );
});
