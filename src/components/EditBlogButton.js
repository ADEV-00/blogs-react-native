import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const EditBlogButton = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { id: route.params?.id })}
        style={styles.btnEdit}
      >
        <Feather name="edit" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnEdit: {
    marginRight: 18,
    backgroundColor: "lightgray",
    borderRadius: 5,
    padding: 2,
  },
});

export default EditBlogButton;
