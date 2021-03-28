import React, { useReducer } from 'react';
import AppReducer from './AppReducer';
import { AppContext } from "./AppContext";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './AppActions';

export const AppProvider = ({ children }) => {

  const initialState = {
    transactions: []
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    });
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    });
  }

  return (
    <AppContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </AppContext.Provider>);
}