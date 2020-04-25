import React from 'react';

import './progressCard.css'

const ProgressCard = ({ bgColor }) => {

    return (
        <div className="progress-card-box">
            <div className="progress-card">
                <div className="progress-card-heading">
                    Total Profit
                </div>
                <div className="progress-card-details">
                    Profit
                </div>
                <div className="progress-card-value" style={{ color: bgColor }}>
                    &#36;180M
                </div>
                <div className="progress-card-progress-bar">
                    <div id="progress-card-current-progress" className="progress-card-progress" style={{ width: "70%", height: "100%", backgroundColor: bgColor }}>
                    </div>
                </div>
                <div className="progress-card-info">
                    <div className="progress-card-change">
                        Change
                     </div>
                    <div className="progress-card-percentage">
                        65%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressCard;