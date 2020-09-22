import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screen/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Blogs"
        component={IndexScreen}
        options={{ title: "Blogs" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
