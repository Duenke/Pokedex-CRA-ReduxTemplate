import { configureStore } from "@reduxjs/toolkit";
import selectorReducer from "../Components/Selector/SelectorSlice";
import listReducer from "../Components/List/ListSlice";

export default configureStore({
  reducer: {
    Selector: selectorReducer,
    List: listReducer
  }
});
