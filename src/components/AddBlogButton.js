import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddBlogButton = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        style={styles.btnAdd}
      >
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnAdd: {
    marginRight: 10,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 5,
  },
});

export default AddBlogButton;
