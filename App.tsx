import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "./src/routes";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
