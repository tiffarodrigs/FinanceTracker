import {connect} from 'react-redux'
import CreateTransaction from './CreateTransaction';
import {addTransaction, saveTransaction,fetchCategories} from '../actions';

const mapStateToProps = (state) => ({
  isModalOpen: state.isModalShown,
  categories: state.categories,
  transactionType :state.transactionType
});

const mapDispatch = {
  fetchCategories : fetchCategories,
  onClick: addTransaction,
  onCloseModal: saveTransaction,
  saveTransaction: saveTransaction
}


export default connect(mapStateToProps, mapDispatch)(CreateTransaction)
//onClick, onCloseModal, isModalOpen