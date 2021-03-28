import React, { useContext } from 'react';
import { Transaction } from '../transaction/Transaction';
import { AppContext } from '../../context/AppContext';
import './transaction-list.css';

export const TransactionList = () => {
  const { transactions } = useContext(AppContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
