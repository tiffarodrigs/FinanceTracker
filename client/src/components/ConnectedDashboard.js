import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';
import {selectTotalSavings, selectTransactionForDisplay} from '../selectors/transactionSelector'
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
  transactions: selectTransactionForDisplay(state),
  balance: selectTotalSavings(state)
});

const mapDispatchToProps = {
  fetchTransactions: fetchTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
