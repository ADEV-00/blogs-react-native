import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { useNavigation } from "@react-navigation/native";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = () => {
  const navigation = useNavigation();
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Blogs"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
