import { createSelector } from "reselect";
impo

const selectAccounts = (state) => state.accounts;

const selectAccountsForDisplay = createSelector([selectAccounts],(accounts)=>{
  
})