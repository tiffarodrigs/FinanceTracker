import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';
import MiniStatement from './miniStatement';

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  fetchTransactions: fetchTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniStatement);
