import React, { useContext }from 'react';
import { InfoIcon, ArrowForwardIcon } from '../../common/ActionIcons';
import { GeoContext } from '..';

import '../listItem.css';

export const CountryItem = (({id, emojiU, name, iso2, states}) => {
    const geoContext = useContext(GeoContext);
    const { loadStates, loadCities, setCurrentCountryId } = geoContext;
    
    const emoji = String.fromCodePoint.apply(String, emojiU.replace(/U\+/gi, "0x").split(' '));
    
    const handleArrowClick = event => {
        setCurrentCountryId(id);
        loadStates(states);
        loadCities();
    };
  
  return (
      <li className="country">
          <div>{emoji}</div>
          <div>{name}</div>
          <div>{iso2}</div>
          <div>
              <InfoIcon name='info' title="Country Info" />
              <ArrowForwardIcon name='arrow' title="Show States" handleClick={handleArrowClick} />
          </div>
      </li>
  );
});
