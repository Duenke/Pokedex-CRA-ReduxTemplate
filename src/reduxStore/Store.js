import { configureStore } from "@reduxjs/toolkit";
import selectorReducer from "../components/Selector/SelectorSlice";
import listReducer from "../components/List/ListSlice";

export default configureStore({
  reducer: {
    Selector: selectorReducer,
    List: listReducer
  }
});
