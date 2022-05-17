import { connect } from 'react-redux';
import Accounts from './Accounts';
import { fetchTransactions, saveAccount } from '../actions';
import { selectAccountsForDisplay } from '../selectors/transactionSelector';

const mapStateToProps = (state) => ({
  accounts: selectAccountsForDisplay(state),
  accountTypes: state.accountTypes,
});

const mapDispatchToProps = {
  onSaveAccount: saveAccount,
  fetchTransactions: fetchTransactions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
