import { connect } from 'react-redux';
import Accounts from './Accounts';
import { fetchAccount, fetchTransactions } from '../actions';
import {selectAccountsForDisplay} from '../selectors/transactionSelector'
const mapStateToProps = (state) => ({
  accounts: selectAccountsForDisplay(state),
});
const mapDispatchToProps = {
  fetchAccount: fetchAccount,
  fetchTransactions: fetchTransactions
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
