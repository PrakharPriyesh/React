import React from 'react';

import cardIcon from './../../../asset/bookmark.png';
import './cardDetails.css';

const CardDetails = (props) => {
    return (
        <div className="card-details-box">
            <div className="card-details">
                <img src={cardIcon} alt={cardIcon} />
                <div className="card-details-card-amount">&#36;189,829.55</div>
                <div className="card-details-card-name">David Beckham</div>
                <div className="card-details-card-number">9820-XXX-2341-8942</div>
                <div className="card-details-card-company">MASTERCARD</div>
                <div className="card-details-card-expiry">Expires on 03/22</div>
            </div>
        </div>
    );
}

export default CardDetails;