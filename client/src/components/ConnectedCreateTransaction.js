import {connect} from 'react-redux'
import CreateTransaction from './CreateTransaction';
import {addTransaction, saveTransaction,fetchCategories,fetchTransactionType,fetchAccount} from '../actions';

const mapStateToProps = (state) => ({
  isModalOpen: state.isModalShown,
  categories: state.categories,
  transactionType :state.transactionType,
  accounts : state.accounts
});

const mapDispatch = {
  fetchTransactionType:fetchTransactionType,
  fetchCategories : fetchCategories,
  onClick: addTransaction,
  onCloseModal: saveTransaction,
  saveTransaction: saveTransaction,
  fetchAccount : fetchAccount
}


export default connect(mapStateToProps, mapDispatch)(CreateTransaction)
//onClick, onCloseModal, isModalOpen