import React from 'react';

import ReferralTable from './referral-table/referralTable';
import './recentReferrals.css';

const RecentReferrals = (props) => {
    return (
        <div className="recent-referrals-container">
            <div className="recent-referrals-card">
                <div className="recent-referrals-card-heading">
                    RECENT REFERRALS
            </div>
                <div className="recent-referrals-card-description">
                    Block with important Recent Referrals information
            </div>
                <div className="recent-referrals-card-table-container">
                    <ReferralTable />
                </div>
            </div>
        </div>
    );
}

export default RecentReferrals;