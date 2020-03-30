import React, {Profiler} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import Store from "./Store/Store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
// import { getAllPokemon } from "./Components/List/ListSlice";

// Store.dispatch(getAllPokemon());

ReactDOM.render(
  <Provider store={Store}>
    <Profiler id="App" onRender={logOnRender}>
      <App />
    </Profiler>
  </Provider>,
  document.getElementById("root")
);

function logOnRender(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log([
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ]);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
