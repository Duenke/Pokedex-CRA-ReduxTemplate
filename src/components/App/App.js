import React, { Profiler } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import { Selector } from "../Selector/Selector";
import { useSelector } from "react-redux";
import { List } from "../List/List";

function App() {
  const selectedPokemon = useSelector(state => state.Selector.pokemon);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <span className={styles.gridContainer}>
          {selectedPokemon && selectedPokemon.length > 0 && (
            <p className={styles.gridItem}>
              Abilities:
              <br />
              {selectedPokemon[0].abilities[0].ability.name}
              <br />
              {selectedPokemon[0].abilities[1]?.ability.name}
            </p>
          )}
          <div
            className={styles.gridItem}
            style={{
              backgroundColor: selectedPokemon.length > 0 ? "" : "white"
            }}
          >
            <img
              src={
                selectedPokemon && selectedPokemon.length > 0
                  ? selectedPokemon[0].sprites.front_default
                  : logo
              }
              className={styles.AppLogo}
              alt="logo"
            />
          </div>
          {selectedPokemon && selectedPokemon.length > 0 && (
            <p className={styles.gridItem}>
              Moves:
              <br />
              {selectedPokemon[0].moves[0].move.name}
              <br />
              {selectedPokemon[0].moves[1]?.move.name}
            </p>
          )}
        </span>
        <Profiler id="Selector" onRender={logOnRender}>
          <Selector />
        </Profiler>
        <Profiler id="List" onRender={logOnRender}>
          <List />
        </Profiler>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.AppLink}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.AppLink}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.AppLink}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.AppLink}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

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

export default App;
