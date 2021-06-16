import React from 'react';
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './actionIcons.css';

export const ArrowForwardIcon = ({title, handleClick = () => {}}) => {    
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faArrowCircleRight}  onClick = {handleClick} color="#d90166" title={title} />
        </div>
    );
};
