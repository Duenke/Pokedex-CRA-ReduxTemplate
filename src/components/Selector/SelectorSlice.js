import { createSlice } from "@reduxjs/toolkit";
import Pokedex from "pokedex-promise-v2";
import { isNullOrEmpty } from "../../Utils/Utils";

export const dex = new Pokedex();

export const slice = createSlice({
  name: "Selector",
  initialState: {
    dexNum: 0,
    pokemon: [],
    searchName: ""
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    increment: state => {
      state.dexNum += 1;
    },
    decrement: state => {
      state.dexNum -= 1;
    },
    reducePokemon: (state, action) => {
      state.pokemon = [action.payload];
    },
    reduceSearchName: (state, action) => {
      state.searchName = action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  reducePokemon,
  reduceSearchName
} = slice.actions;
export default slice.reducer;

// The function below is called a selector and allows us to select a pokemon from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.Selector.pokemon)`

export const selectPokemon = state => state.Selector.pokemon; //I use the in-line option instead.

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(getPokemonAsync('mew'))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getPokemon = (name, recycledPokemon = {}) => async dispatch => {
  const pokemon = recycledPokemon.id
    ? recycledPokemon
    : await dex.getPokemonByName(name);

  if (isNullOrEmpty(name)) {
    dispatch(reducePokemon(pokemon));
    dispatch(reduceSearchName(pokemon.name));
  }
};

export const getPokemonAsync = name => async dispatch => {
  const pokemon = await dex.getPokemonByName(name);

  if (isNullOrEmpty(name)) {
    setTimeout(() => {
      dispatch(reducePokemon(pokemon));
      dispatch(reduceSearchName(pokemon.name));
    }, 1000);
  }
};
