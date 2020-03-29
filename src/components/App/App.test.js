import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../reduxStore/Store";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={Store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
