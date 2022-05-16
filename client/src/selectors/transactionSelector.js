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

const selectCurrentBalanceByAccount = createSelector([selectTransactions], (transactions) => {

  return transactions.reduce((final, transaction) => {
    console.log({final, transaction})
    if(transaction[transaction.account]){
      final[transaction.account] = Number(final[transaction.account]) + Number(transaction.value);
    } else {
      final[transaction.account] = Number(transaction.value);
    }
    return final;
  }, {});
})

export const selectAccountsForDisplay = createSelector(
  [selectAccounts, selectCurrentBalanceByAccount],
  (accounts, currentBalanceByAccount) => {
    console.log({currentBalanceByAccount});
    const clonedAccounts = [...accounts];
    return clonedAccounts.map((account) => {
      return {
        label: account.label ,
        currentBalance: Number(account.startingBalance) + Number(currentBalanceByAccount[account._id]) ,
      }
    })
    
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
