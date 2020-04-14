import React from 'react';

import ProgressCard from './progress-card/progressCard'
import './progressInformation.css'

function ProgressInformation(props) {
    return (
        <div className="progress-information-container">
            <font>ProgressInformation</font>
            <ProgressCard />
        </div>
    );
}

export default ProgressInformation;