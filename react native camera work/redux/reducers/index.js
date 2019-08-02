import { combineReducers } from 'redux';
import reducer from './reducer'
import foodReducer from './foodreducer'

const allReducers = combineReducers({
    basicInfo: reducer,
    foodInfo: foodReducer
});

export default allReducers;