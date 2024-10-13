import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import getAllProducts from "../api/products";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
