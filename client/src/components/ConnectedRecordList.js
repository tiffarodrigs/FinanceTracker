import { connect } from 'react-redux';
import RecordList from './RecordList';
import { fetchTransactions } from '../actions';

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProp = {
  fetchTransactions: fetchTransactions,
};
export default connect(mapStateToProps, mapDispatchToProp)(RecordList);
