import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(
    Context
  );

  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener("focus", () => {
      getBlogPosts();
    });

    navigation.addListener("state", () => {
      getBlogPosts();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};
//Doesnt work this is navigation 4.0
IndexScreen.navigationOptions = () => {
  return {
    headerRight: <Feather name="plus" size={30} />,
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 300,
    height: 100,
    justifyContent: "space-between",
    paddingVertical: 20,
    padding: 20,
    borderTopWidth: 10,
    borderColor: "#00F260",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.68,

    elevation: 11,
  },
  title: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    overflow: "hidden",
    width: 200,
  },
  icon: {
    marginTop: 10,
    fontSize: 24,
  },
});

export default IndexScreen;
