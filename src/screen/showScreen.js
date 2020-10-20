import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  return (
    <View style={styles.blogWrapper}>
      <Text style={styles.blogTitle}>{blogPost.title}</Text>
      <Text style={styles.blogContent}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blogTitle: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 10,
    borderBottomWidth: 2,
    borderColor: "gray",
    paddingBottom: 5,
  },
  blogContent: {
    fontSize: 20,
    margin: 10,
    lineHeight: 30,
  },
});

export default ShowScreen;
