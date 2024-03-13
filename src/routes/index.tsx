import React, { useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { FavoriteScreen } from "../screens/FavoritesScreen/FavoriteScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { DetailsScreen } from "../screens/DetailsScreen/DetailsScreen";
import { View, Text, Button } from "react-native";
import { Header } from "../components/header/Header";
import { Modalize } from "react-native-modalize";
import { FormsScreen } from "../screens/FormsScreen/FormsScreen";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export const Navigator = () => {
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
        <Tabs.Screen
          name="Repositórios"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tabs.Screen name="Favoritos" component={FavoriteScreen} />
      </Tabs.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Detalhes" component={DetailsScreen} />
      <Stack.Screen name="Formulario" component={FormsScreen} />
    </Stack.Navigator>
  );
};
