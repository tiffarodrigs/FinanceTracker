import { createSelector } from 'reselect';

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
    console.log({ currentBalanceByAccount });
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

export const selectTransactionForDisplay = createSelector(
  [
    selectTransactions,
    selectAccountById,
    selectCategoryById,
    selectTransactionTypeById,
  ],
  (transactions, accountById, categoryById, transactionTypeById) => {
    // return transactions;
    return transactions.map((transaction) => {
      transaction.account = accountById[transaction.account];
      transaction.category = categoryById[transaction.category];
      transaction.transactionType =
        transactionTypeById[transaction.transactionType];

      return transaction;
    });
    //for every transaction record we are going to map the category id to category name
  }
);
