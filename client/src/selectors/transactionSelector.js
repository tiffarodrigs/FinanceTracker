import { createSelector } from 'reselect';

const selectTransactions = (state) => state.transactions;
const selectAccounts = (state) => state.accounts;

const selectAvailableStartingBalance = createSelector(
  [selectAccounts],
  (accounts) => {
    return accounts.reduce((total, { startingBalance }) => {
      return total + Number(startingBalance);
    }, 0);
  }
);

export const selectTotalSavings = createSelector(
  [selectTransactions, selectAvailableStartingBalance],
  (transactions, availablestartingBalance) => {
    return transactions.reduce((total, transaction) => {
      if (transaction.transactionType === 'expense') {
        return total - Number(transaction.value);
      } else if (transaction.transactionType === 'income') {
        return total + Number(transaction.value);
      }
    }, availablestartingBalance);
  }
);
