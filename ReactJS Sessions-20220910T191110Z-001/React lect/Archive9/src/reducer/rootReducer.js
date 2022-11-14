import changeNumber from "./index";
import userReducer from "./userReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeNumberKey:changeNumber,
    users: userReducer
})

export default rootReducer;