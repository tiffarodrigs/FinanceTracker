import { connect } from 'react-redux';
import Accounts from './Accounts';
import { fetchAccount, fetchTransactions,fetchAccountTypes, saveAccount } from '../actions';
import {selectAccountsForDisplay} from '../selectors/transactionSelector'
const mapStateToProps = (state) => ({
  accounts: selectAccountsForDisplay(state),
  accountTypes : state.accountTypes
});
const mapDispatchToProps = {
  onSaveAccount: saveAccount,
  fetchAccount: fetchAccount,
  fetchTransactions: fetchTransactions,
  fetchAccountTypes : fetchAccountTypes
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
