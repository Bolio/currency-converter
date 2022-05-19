import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import currencyConverter from "./modules/currencyConverter/index";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeEnhancers = compose(applyMiddleware(thunk), devTools) || compose;

const rootReducer = () =>
  combineReducers({
    currency: currencyConverter,
  });

export default function configureStore() {
  const store = createStore(rootReducer(), composeEnhancers);

  // Add more reducers
  // store.replaceReducer(
  //   combineReducers({
  //     currency: currencyConverter,
  //   })
  // );

  return store;
}
