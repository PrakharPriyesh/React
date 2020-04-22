import React from 'react';

import './modal.scss';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-card">
                <div className="modal-card-heading">
                    Flipkart
                </div>
                <div className="modal-card-description">
                    Be it a manufacturer, vendor or supplier, simply sell your products online on Flipkart and become a top e-commerce player with minimum investment. Through a team of experts offering exclusive seller workshops, training, and seller support, Flipkart focuses on empowering sellers across India.Be it a manufacturer, vendor or supplier, simply sell your products online on Flipkart and become a top e-commerce player with minimum investment. Through a team of experts offering exclusive seller workshops, training, and seller support, Flipkart focuses on empowering sellers across India.
                </div>
                <div className="modal-card-button">
                    <button>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;