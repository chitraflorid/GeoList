import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

import './actionIcons.css';

export const InfoIcon = ({ title }) => {
     return (
         <div name="info" className="icon">
             <FaInfoCircle color="#4267B2" title={title} />
         </div>
  );
};
