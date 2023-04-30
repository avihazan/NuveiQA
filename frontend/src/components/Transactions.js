import React from 'react';
import TransactionsContent from './TransactionsContent';
import './TransactionsContent.module.css' 

const Transactions = () => {
	return (
        <div>
        <table>
        <tr className="tHeader">
            <th>Date</th>
            <th>ClientID</th>
            <th>Amount</th>
            <th>Currency Code</th>
            <th>Bank</th>
            <th>Status</th>
            <th>Last Modified</th>
            <th>Date Created</th>
        </tr>
        <TransactionsContent/>

    </table>
</div>
	);
};
export default Transactions;
