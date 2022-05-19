import { connect } from 'react-redux';
import { validateUser } from '../actions';
import Login from './Login';
import {saveState} from '../sessionStorage'


const mapStateToProps = (state) => (state);

const mapDispatchToProps = {
  validateUser: validateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
