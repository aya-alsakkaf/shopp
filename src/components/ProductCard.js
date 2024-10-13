import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        width: 150,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Image
        source={{
          uri: `https://react-native-mini-project-items.eapi.joincoded.com/${product.image}`,
        }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
