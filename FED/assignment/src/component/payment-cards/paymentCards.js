import React from 'react';

import CardDetails from './card-details/cardDetails';
import './paymentCards.css';

function PaymentCards(props) {
    return (
        <div className="payment-cards">
            <div className="payment-cards-heading">
                YOUR CARDS
            </div>
            <div className="payment-cards-card-details-container">
                <CardDetails />
                <CardDetails />
                <CardDetails />
            </div>            
        </div>
    );
}

export default PaymentCards;