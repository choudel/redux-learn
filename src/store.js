import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools, devToolsEnhancer } from '@redux-devtools/extension';

const store = createStore(reducer,
    devToolsEnhancer({trace:true}))
export default store;