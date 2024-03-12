import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabNavigator } from "./src/routes";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
