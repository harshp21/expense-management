import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import useFormatter from '../../hooks/useFormatter';
import './transaction.css';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(AppContext);
  const { moneyFormatter } = useFormatter();
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
