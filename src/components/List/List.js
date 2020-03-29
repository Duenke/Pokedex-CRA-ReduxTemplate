import React from "react";
import styles from "./List.module.css";
import { useDispatch, useSelector } from "react-redux";

export function List() {
  const dispatch = useDispatch();

  const allPokemon = useSelector(state => state.List.allPokemon);

  return (
    <div>
      <ul className={styles.pokemonList}>
        {allPokemon &&
          allPokemon.length > 0 &&
          allPokemon.map(pokemon => (
            <div key={pokemon.name} className={styles.pokemonName}>
              <li key={pokemon.name}>{pokemon.name}</li>
            </div>
          ))}
      </ul>
    </div>
  );
}
