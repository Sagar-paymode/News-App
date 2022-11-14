import changeNumber from "./index";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeNumberKey:changeNumber
})

export default rootReducer;