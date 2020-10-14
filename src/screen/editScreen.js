import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  return (
    <View>
      <Text>Edit Screen</Text>
      <Text>{blogPost.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
