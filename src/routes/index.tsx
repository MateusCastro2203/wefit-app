import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { FavoriteScreen } from "../screens/FavoritesScreen/FavoriteScreen";

const Tabs = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Favorites" component={FavoriteScreen} />
    </Tabs.Navigator>
  );
};
