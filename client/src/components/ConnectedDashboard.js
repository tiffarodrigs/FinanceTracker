import { connect } from 'react-redux';
import { fetchTransactions } from '../actions';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  fetchTransactions: fetchTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
