import { connect } from 'react-redux';
import Accounts from './Accounts';
import { fetchTransactions, saveAccount, openModal, closeModal } from '../actions';
import { selectAccountsForDisplay } from '../selectors/transactionSelector';

const mapStateToProps = (state) => ({
  accounts: selectAccountsForDisplay(state),
  accountTypes: state.accountTypes,
  isModalOpen: state.isModalShown
});

const mapDispatchToProps = {
  openModal: openModal,
  closeModal: closeModal,
  onSaveAccount: saveAccount,
  fetchTransactions: fetchTransactions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
