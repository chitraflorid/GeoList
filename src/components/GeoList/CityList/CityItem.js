import React from 'react';
import { InfoIcon } from '../../common/ActionIcons';
import '../listitem.css';

export const CityItem = ({ name }) => {
  return (
    <li className="city">
      <div>{name}</div>
      <div>
          <InfoIcon title="City Info" />
      </div>
    </li>
  );
};
