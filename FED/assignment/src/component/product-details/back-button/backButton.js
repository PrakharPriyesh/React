import React from 'react';

import leftArrow from './../../../asset/arrow-left.png';
import './backButton.css';

const BackButton = (props) => {
    return (
        <button className="back-button">
            <img src={leftArrow} alt={leftArrow} />
            <font>Back</font>
        </button>
    );
}

export default BackButton;