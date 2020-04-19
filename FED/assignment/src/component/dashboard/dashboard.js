import React from 'react';


import './dashboard.css';
import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import ProcessingInformation from './../progress-information/progressInformation';
import RecentReferrals from './../recent-referrals/recentReferrals';
import PaymentCards from './../payment-cards/paymentCards';
import Teams from './../teams/teams';


function Dashboard(props) {
    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-item">
                    <Sidebar />
                    <Navbar />
                    <ProcessingInformation />
                    <RecentReferrals />
                    {/* <PaymentCards />
                    <Teams /> */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;