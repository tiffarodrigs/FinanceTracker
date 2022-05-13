import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';
import {selectTotalSavings} from '../selectors/transactionSelector'
import Dashboard from './Dashboard';

console.log({fetchTransactions});
const mapStateToProps = (state) => ({
  transactions: state.transactions,
  balance: selectTotalSavings(state)
});

const mapDispatchToProps = {
  fetchTransactions: fetchTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
