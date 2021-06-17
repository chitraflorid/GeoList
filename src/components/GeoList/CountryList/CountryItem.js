import React, { useContext, useState }from 'react';
import { InfoIcon, ArrowForwardIcon } from '../../common/ActionIcons';
import { GeoContext } from '..';

import '../listItem.css';

export const CountryItem = (({id, emojiU, name, iso2, states}) => {
    const geoContext = useContext(GeoContext);
    const { loadStates, loadCities, setCurrentCountryId } = geoContext;
    const [activeId, setActive] = useState(0);
  //  const [isActive, markActive] = useState(false);
    
    const emoji = String.fromCodePoint.apply(String, emojiU.replace(/U\+/gi, "0x").split(' '));
    
    const handleCountryClick = event => {     

            setActive(event.currentTarget.id);
                 
        if (event.target.closest("[name*='arrow']")) {
            setCurrentCountryId(id);
            loadStates(states);
            loadCities();
        } else {
            console.log("Info Icon Clicked!!!!");
        }
    };

  return (
      <li id={id} className={activeId == id  ? "country active": "country"}  onClick={handleCountryClick}>
          <div>{emoji}</div>
          <div>{name}</div>
          <div>{iso2}</div>
          <div>
              <InfoIcon title="Country Info" />
              <ArrowForwardIcon title="Show States" />
          </div>
      </li>
  );
});
