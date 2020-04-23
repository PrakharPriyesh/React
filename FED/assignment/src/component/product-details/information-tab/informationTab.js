import React from 'react';

import './informationTab.css';

const InformationTab = (props) => {


    const onclickHandler = (event) => {
        const description = document.getElementsByClassName('information-tab-description')[0];
        const information = document.getElementsByClassName('information-tab-information')[0];
        const descriptionButton = document.getElementById('information-tab-button1');
        const informationButton = document.getElementById('information-tab-button2');
        
        if (event.target.id === 'information-tab-button1') {
            description.style.display = "none";
            information.style.display = "initial";
            descriptionButton.style.borderBottom = "3px solid dodgerblue";
            informationButton.style.borderBottom = "none";
        }
        else {
            description.style.display = "initial";
            information.style.display = "none";
            informationButton.style.borderBottom = "3px solid dodgerblue";
            descriptionButton.style.borderBottom = "none";
        }
    }

    return (
        <div className="information-tab">
            <div className="information-tab-buttons">
                <button id="information-tab-button1" onClick={onclickHandler}>Information</button>
                <button id="information-tab-button2" onClick={onclickHandler}>Description</button>
            </div>
            <div className="information-tab-information">
                <ul className="information-tab-information-list">
                    <li>
                        <div id="information-tab-list-heading">Information Lists</div>
                        <div id="information-tab-list-body" >Information lists is perfect for defining Information.</div>
                    </li>
                    <li>
                        <div id="information-tab-list-heading">Information Lists</div>
                        <div id="information-tab-list-body" >Information lists is perfect for defining Information.</div>
                    </li>
                    <li>
                        <div id="information-tab-list-heading">Information Lists</div>
                        <div id="information-tab-list-body" >Information lists is perfect for defining Information.</div>
                    </li>
                </ul>
            </div>
            <div className="information-tab-description">
                <ul className="information-tab-description-list">
                    <li>
                        <div id="information-tab-list-heading">Description Lists</div>
                        <div id="information-tab-list-body" >Description lists is perfect for defining description.</div>
                    </li>
                    <li>
                        <div id="information-tab-list-heading">Description Lists</div>
                        <div id="information-tab-list-body" >Description lists is perfect for defining description.</div>
                    </li>
                    <li>
                        <div id="information-tab-list-heading">Description Lists</div>
                        <div id="information-tab-list-body" >Description lists is perfect for defining description.</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default InformationTab;