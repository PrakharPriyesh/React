import React from 'react';

import TeamCard from './team-card/teamCard';
import './teams.css';

const Teams = (props) => {
    return (
        <div className="teams">
            <div className="teams-heading">YOUR TEAMS</div>
            <div className="team-card-container">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    );
}

export default Teams;