import React from "react";

import { NavigationContainer } from "@react-navigation/native";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Movies from "./Screens/MoviesList";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
