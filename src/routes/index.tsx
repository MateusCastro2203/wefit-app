import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { FavoriteScreen } from "../screens/FavoritesScreen/FavoriteScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { DetailsScreen } from "../screens/DetailsScreen/DetailsScreen";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const Navigator = () => {
  const [focusedTab, setFocusedTab] = useState("Repositórios");

  const Home = () => {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Repositórios") {
              return <AntDesign name="github" size={24} color={color} />;
            }
            if (route.name === "Favoritos") {
              return <Entypo name="star" size={24} color={color} />;
            }
          },
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#1976D2",
        })}
      >
        <Tabs.Screen name="Repositórios" component={HomeScreen} />
        <Tabs.Screen name="Favoritos" component={FavoriteScreen} />
      </Tabs.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
