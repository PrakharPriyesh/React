import React from 'react';

import './teamCard.css'

function TeamCard(props) {
    return (
        <div className="team-card">
            <div className="team-card-name">
                Team One
            </div>
            <div className="team-card-icon">

            </div>
            <div className="team-card-expense">
                Current Month Charged &#36; 10,200.00
            </div>
        </div>
    );
}

export default TeamCard;