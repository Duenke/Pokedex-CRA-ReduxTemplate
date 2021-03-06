import React, { useEffect } from "react";
import styles from "./List.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "./ListSlice";
import { getPokemon } from "../Selector/SelectorSlice";
import { capitalizeFirstLetter } from "../../Utils/Utils";

export function List() {
  const dispatch = useDispatch();

  const allPokemon = useSelector(state => state.List.allPokemon);
  const loadingPokemon = useSelector(state => state.List.loadingPokemon);

  useEffect(() => {}, [allPokemon]);

  return (
    <div>
      <ul className={styles.pokemonList}>
        {allPokemon &&
          allPokemon.length > 0 &&
          allPokemon.map(pokemon => (
            <div key={pokemon.name}>
              <li key={pokemon.name}>
                <button onClick={() => dispatch(getPokemon(pokemon.name))} className={styles.pokemonName}>
                  {capitalizeFirstLetter(pokemon.name)}
                </button>
              </li>
            </div>
          ))}
      </ul>

      <span>
        {allPokemon && allPokemon.length < 1 && (
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(getAllPokemon())}
          >
            {!loadingPokemon
              ? "Search the tall grass?"
              : "Searching the tall grass..."}
          </button>
        )}
      </span>
    </div>
  );
}
