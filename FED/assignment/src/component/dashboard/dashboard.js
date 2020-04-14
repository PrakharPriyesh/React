import React from 'react';


import './dashboard.css';
import Navbar from './../navbar/navbar';

function Dashboard(props) {
    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="item3">3</div>
                <div className="item4">4</div>
                <div className="item5">5</div>
            </div>
        </>
    );
}

export default Dashboard;