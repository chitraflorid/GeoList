import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

import './actionIcons.css';

export const ArrowForwardIcon = ({title}) => {
    return (
        <div name="arrow" className="icon">
            <FaArrowCircleRight color="#d90166" title={title} />
        </div>
    );
};
