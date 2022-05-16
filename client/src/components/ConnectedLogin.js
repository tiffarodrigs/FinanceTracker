import { connect } from 'react-redux';
import { validateUser } from '../actions';
import {setToken} from './../App';
import Login from './Login';


const mapStateToProps = (state) => ({
  setToken: state.setToken
});

const mapDispatchToProps = {
  validateUser: validateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
