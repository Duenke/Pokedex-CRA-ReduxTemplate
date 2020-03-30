import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getPokemon,
  getPokemonAsync,
  reduceSearchName
} from "./SelectorSlice";
import styles from "./Selector.module.css";

export function Selector() {
  const dispatch = useDispatch();
  const dexNum = useSelector(state => state.Selector.dexNum);
  const searchName = useSelector(state => state.Selector.searchName);
  const loadingPokemon = useSelector(state => state.List.loadingPokemon);

  return (
    !loadingPokemon && (
      <div>
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span className={styles.value}>{dexNum}</span>
          <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={searchName}
          placeholder="Who's that Pokemon?"
          onChange={e => dispatch(reduceSearchName(e.target.value))}
        />
        <div className={styles.row}>
          <button
            className={styles.button}
            onClick={() => dispatch(getPokemon(searchName))}
          >
            Choose Pokemon
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(getPokemonAsync(searchName))}
          >
            Choose Async
          </button>
        </div>
      </div>
    )
  );
}
