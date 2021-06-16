import React from 'react';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './actionIcons.css';

export const InfoIcon = ({ title }) => {
     return (
         <div className="icon">
             <FontAwesomeIcon icon={faInfoCircle} color="#4267B2" title={title} />
         </div>
  );
};
