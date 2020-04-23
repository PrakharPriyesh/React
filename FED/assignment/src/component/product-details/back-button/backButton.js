import React, { useState } from 'react';
import { Redirect } from 'react-router';

import leftArrow from './../../../asset/arrow-left.png';
import './backButton.css';

const BackButton = (props) => {
    const [backState, changeBackState] = useState(false);

    const OnBack = () => {
        changeBackState(!backState)
    }

    if (backState === true) {
        return (
            <Redirect to="/catalog"></Redirect>
        )
    }


    return (
        <button className="back-button" onClick={OnBack}>
            <img src={leftArrow} alt={leftArrow} />
            <font>Back</font>
        </button>
    );
}

export default BackButton;