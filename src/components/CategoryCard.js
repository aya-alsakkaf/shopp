import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryCard = ({ name, index }) => {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 0.2,
        borderRadius: 10,
        marginTop: 10,
        width: 100,
        height: 40,
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: index % 2 === 0 ? "#f0f0f0" : "#fff",
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
