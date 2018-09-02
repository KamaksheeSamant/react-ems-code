
//import devToolsEnhancer from "remote-redux-devtools";
import { createStore } from "redux";
import reducer from "../reducers";
import {initState} from '../common/const/commonConst';
//import { persistStore, autoRehydrate } from 'redux-persist'
// IF YOU WANNA TO DEAL WITH ASYNC NETWORK CALLS --> 
//import thunk from "redux-thunk"; 


export default function configureStore() {
  // WHEN TO USE DEVTOOLS COMPOSE HELPER --> 
  // (If you setup your store with middlewares and enhancers like redux-thunk )
  // const enhancer = compose(
  //   applyMiddleware(thunk),
  //   devTools({
  //     name: "Westpac EMS",
  //     realtime: true
  //   })
  // );

  const store = createStore(reducer,initState);
  //persistStore(store);

  return store;
}