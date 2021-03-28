import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import useFormatter from '../../hooks/useFormatter';
import './income-expense.css';

export const IncomeExpenses = () => {
  const { transactions } = useContext(AppContext);
  const { moneyFormatter } = useFormatter();

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
    </div>
  )
}
