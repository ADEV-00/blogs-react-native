import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screen/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screen/showScreen";
import CreateScreen from "./src/screen/createScreen";
import AddBlogButton from "./src/components/AddBlogButton";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Blogs"
        component={IndexScreen}
        options={{
          title: "Blogs",
          headerRight: () => (
            <AddBlogButton onPress={() => navigation.navigate("Create")} />
          ),
        }}
      />
      <Stack.Screen name="Show" component={ShowScreen} />
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
