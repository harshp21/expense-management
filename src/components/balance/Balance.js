import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import useFormatter from '../../hooks/useFormatter';
import './balance.css';

export const Balance = () => {
  const { transactions } = useContext(AppContext);
  const { moneyFormatter } = useFormatter();

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);
  const sign = total < 0 ? '-' : '';
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}{moneyFormatter(total)}</h1>
    </>
  )
}
