import React from 'react';


import './dashboard.css';
import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import ProcessingInformation from './../progress-information/progressInformation';
import RecentReferrals from './../recent-referrals/recentReferrals';


function Dashboard(props) {
    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <div className="item1">
                    <Sidebar />
                </div>
                <div className="item2">
                    <ProcessingInformation />
                </div>
                <div className="item3">
                    <RecentReferrals />
                </div>
                <div className="item4">4</div>
                <div className="item5">5</div>
            </div>
        </>
    );
}

export default Dashboard;