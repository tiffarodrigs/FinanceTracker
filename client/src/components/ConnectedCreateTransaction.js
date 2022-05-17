import {connect} from 'react-redux'
import CreateTransaction from './CreateTransaction';
import {addTransaction, saveTransaction} from '../actions';

const mapStateToProps = (state) => ({
  isModalOpen: state.isModalShown,
  categories: state.categories,
  transactionType :state.transactionType,
  accounts : state.accounts
});

const mapDispatch = {
  onClick: addTransaction,
  onCloseModal: saveTransaction,
  saveTransaction: saveTransaction,
}


export default connect(mapStateToProps, mapDispatch)(CreateTransaction)
//onClick, onCloseModal, isModalOpen