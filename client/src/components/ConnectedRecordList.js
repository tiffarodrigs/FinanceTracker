import { connect } from 'react-redux';
import RecordList from './RecordList';
import { fetchTransactions } from '../actions';
import {selectTransactionForDisplay} from '../selectors/transactionSelector'

const mapStateToProps = (state) => ({

  transactions: selectTransactionForDisplay(state),
});

const mapDispatchToProp = {
  fetchTransactions: fetchTransactions,
};
export default connect(mapStateToProps, mapDispatchToProp)(RecordList);
