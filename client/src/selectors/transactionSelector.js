import { createSelector } from 'reselect';

//A "selector function" is any function that accepts the Redux store 
//state (or part of the state) as an argument, and returns data that is based on that state.
const selectTransactions = (state) => state.transactions;
const selectAccounts = (state) => state.accounts;
const selectCategories = (state) => state.categories;
const selectTransactionType = (state) => state.transactionType;

const selectAccountById = createSelector([selectAccounts], (accounts) => {
  return accounts.reduce((result, account) => {
    result[account._id] = account;
    return result;
  }, {});
});

const selectCategoryById = createSelector([selectCategories], (categories) => {
  return categories.reduce((result, category) => {
    result[category._id] = category;
    return result;
  }, {});
});

const selectTransactionTypeById = createSelector(
  [selectTransactionType],
  (transactionTypes) => {
    return transactionTypes.reduce((result, transactionType) => {
      result[transactionType._id] = transactionType;
      return result;
    }, {});
  }
);

const selectAvailableStartingBalance = createSelector(
  [selectAccounts],
  (accounts) => {
    return accounts.reduce((total, { startingBalance }) => {
      return total + Number(startingBalance);
    }, 0);
  }
);

const selectCurrentBalanceByAccount = createSelector(
  [selectTransactions],
  (transactions) => {
    return transactions.reduce((final, transaction) => {
      if (transaction[transaction.account]) {
        final[transaction.account] =
          Number(final[transaction.account]) + Number(transaction.value);
      } else {
        final[transaction.account] = Number(transaction.value);
      }
      return final;
    }, {});
  }
);

export const selectAccountsForDisplay = createSelector(
  [selectAccounts, selectCurrentBalanceByAccount],
  (accounts, currentBalanceByAccount) => {
    const clonedAccounts = [...accounts];
    return clonedAccounts.map((account) => {
      return {
        label: account.label,
        currentBalance:
          Number(account.startingBalance) +
          Number(currentBalanceByAccount[account._id] || 0),
      };
    });
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
//createSelector can accept multiple input selectors, which can be provided as 
//separate arguments or as an array. The results from all the input selectors are 
//provided as separate arguments to the output selector:


export const selectTransactionForDisplay = createSelector(
  [
    selectTransactions,
    selectAccountById,
    selectCategoryById,
    selectTransactionTypeById,
  ],
  (transactions, accountById, categoryById, transactionTypeById) => {

    const test =  transactions.reduce((newTransactions, transaction) => {
      const newTransaction = {...transactions};
      //console.log("newTransaction : " ,newTransaction)

      newTransaction.account = accountById[transaction.account];
      newTransaction.category = categoryById[transaction.category];
      newTransaction.transactionType =transactionTypeById[transaction.transactionType];
         console.log("newTransaction after : " ,newTransaction)
         console.log("newTransactions  : " ,newTransactions)

       // newTransactions= Object.assign({ElementList}, newTransactions)

       newTransactions.push(newTransaction);
       return newTransactions;
    },[]);
    //console.log("test : ",test);
    return test;
    //for every transaction record we are going to map the category id to category name
  }
);
