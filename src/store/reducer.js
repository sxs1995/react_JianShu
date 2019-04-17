
import { combineReducers } from 'redux';
import HeaderReducer from '../common/header/store/reducer';
export default combineReducers({
    header: HeaderReducer
})
