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
        <Feather name="plus" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnAdd: {
    marginRight: 18,
    backgroundColor: "lightgray",
    borderRadius: 5,
    padding: 2,
  },
});

export default AddBlogButton;
