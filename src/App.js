import React from 'react';
import { Header } from './components/header/Header';
import { Balance } from './components/balance/Balance';
import { IncomeExpenses } from './components/incomeExpense/IncomeExpenses';
import { TransactionList } from './components/transactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';

import { AppProvider } from './context/AppState';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </AppProvider>
  );
}

export default App;
