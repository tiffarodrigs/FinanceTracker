import { createSelector } from 'reselect';

const selectLogin = (state) => state.login;

const selectIsUserLoggedIn = createSelector([selectLogin], (login) => {
  return !!login.token;
})

export {selectIsUserLoggedIn};