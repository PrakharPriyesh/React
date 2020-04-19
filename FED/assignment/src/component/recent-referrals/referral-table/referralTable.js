import React from 'react';

import './referralTable.css'

const ReferralTable = (props) => {
    return (
        <div className="referral-table">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Age</th>
                        <th>Office</th>
                        <th>Date</th>
                        <th>Salary</th>
                    </tr>
                    <tr>
                        <td>Damon</td>
                        <td>5516 Adolfo Green</td>
                        <td>18</td>
                        <td>Littelhaven</td>
                        <td>2014/06/13</td>
                        <td>553.563</td>
                    </tr>
                    <tr>
                        <td>Damon</td>
                        <td>5516 Adolfo Green</td>
                        <td>18</td>
                        <td>Littelhaven</td>
                        <td>2014/06/13</td>
                        <td>553.563</td>
                    </tr>
                    <tr>
                        <td>Damon</td>
                        <td>5516 Adolfo Green</td>
                        <td>18</td>
                        <td>Littelhaven</td>
                        <td>2014/06/13</td>
                        <td>553.563</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ReferralTable;