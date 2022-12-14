import rootReducer from "./reducer/rootReducer";

import { legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;