import { createSlice } from "@reduxjs/toolkit";
import Pokedex from "pokedex-promise-v2";

const dex = new Pokedex();

export const slice = createSlice({
  name: "List",
  initialState: {
    allPokemon: [],
    loadingPokemon: false
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    reduceAllPokemon: (state, action) => {
      state.allPokemon = action.payload;
    },
    reduceLoadingPokemon: (state, action) => {
      state.loadingPokemon = action.payload;
    }
  }
});

export const { reduceAllPokemon, reduceLoadingPokemon } = slice.actions;
export default slice.reducer;

// The function below is called a selector and allows us to select allPokemon from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.List.allPokemon)`

export const selectAllPokemon = state => state.List.allPokemon; //I use the in-line option instead.

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getPokemonAsync('mew'))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getAllPokemon = () => async dispatch => {
  dispatch(reduceLoadingPokemon(true));
  
  let allPokemon = await dex
    .getPokemonsList()
    .then(response => response.results);

  // const allPokemonDetailPromises = allPokemon.map(pokemon =>
  //   dex.getPokemonByName(pokemon.name)
  // );

  // const allPokemonDetailsResolved = await Promise.all(allPokemonDetailPromises);
  
  setTimeout(() => {
    dispatch(reduceAllPokemon(allPokemon));
    dispatch(reduceLoadingPokemon(false));
  }, 1000);
};
