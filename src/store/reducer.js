
import { combineReducers } from 'redux-immutable';
import { reducer as HeaderReducer} from '../common/header/store';
export default combineReducers({
    header: HeaderReducer
})
