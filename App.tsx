import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import InputScreen from "./screens/InputScreen";
import ButtonScreen from "./screens/ButtonScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{ title: "InputScreen" }}
        />
        <Stack.Screen
          name="ButtonScreen"
          component={ButtonScreen}
          options={{ title: "ButtonScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
