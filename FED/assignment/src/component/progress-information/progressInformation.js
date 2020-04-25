import React from 'react';

import ProgressCard from './progress-card/progressCard'
import './progressInformation.css'

const ProgressInformation = (props) => {

    let colors = ['dodgerblue','gold',  'rgb(56, 223, 111)','rgb(248, 53, 92)']
    return (
        <div className="progress-information-container">
            <div className="progress-information-heading">
                PROGRESS INFORMATION
            </div>

            <div className="progress-card-container">
                {
                    colors.map((color,index) => {
                        return (
                            <ProgressCard key={index} bgColor={color}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProgressInformation;