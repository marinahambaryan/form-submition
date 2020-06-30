//libraries
import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//styles
import "./index.css";

//components
import App from "./App";

//config
import * as serviceWorker from "./serviceWorker";

//reducers
import usersReducer from "./store/reducers/users";
import dialogReducer from "./store/reducers/dialog";
import sortFieldAndDirectionReducer from "./store/reducers/sortFieldAndDirection";
import fieldsDirectionsReducer from "./store/reducers/fieldsDirections";

const rootReducer = combineReducers({
  users: usersReducer,
  dialog: dialogReducer,
  sortFieldAndDirection: sortFieldAndDirectionReducer,
  fieldsDirections: fieldsDirectionsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
