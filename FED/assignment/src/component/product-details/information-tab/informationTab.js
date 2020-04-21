import React from 'react';

import './informationTab.css';

const InformationTab = (props) => {
    return (
        <div className="information-tab">
            <div className="information-tab-buttons">
                <button id="information-tab-button1">Information</button>
                <button id="information-tab-button2">Description</button>
            </div>
            <div id="information-tab-description-1">
                <ul className="information-tab-list1">
                    <li>
                        <font id="information-tab-list-heading"></font>
                        <font id="information-tab-list-body" ></font>
                    </li>
                    <li><font id="information-tab-list-heading"></font>
                        <font id="information-tab-list-body" ></font>
                    </li>
                    <li><font id="information-tab-list-heading"></font>
                        <font id="information-tab-list-body" ></font>
                    </li>
                </ul>
            </div>
            <div id="information-tab-description-2">

            </div>
        </div>
    );
}

export default InformationTab;