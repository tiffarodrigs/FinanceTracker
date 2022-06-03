import {connect} from 'react-redux'
import CreateTransaction from './CreateTransaction';
import {addTransaction, saveTransaction} from '../actions';
import {selectCategoryByTransactionType} from '../selectors/transactionSelector'

const mapStateToProps = (state) => ({
  isModalOpen: state.isModalShown,
  categories: selectCategoryByTransactionType(state),
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