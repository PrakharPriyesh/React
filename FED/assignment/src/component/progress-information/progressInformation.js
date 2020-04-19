import React from 'react';

import ProgressCard from './progress-card/progressCard'
import './progressInformation.css'

function ProgressInformation(props) {
    return (
        <div className="progress-information-container">
            <div className="progress-information-heading">
                PROGRESS INFORMATION
            </div>

            <div className="progress-card-container">
                <ProgressCard />
                <ProgressCard />
                <ProgressCard />
                <ProgressCard />
            </div>
        </div>
    );
}

export default ProgressInformation;