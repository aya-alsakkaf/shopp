import { Text, TextInput, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryList from "../components/CategoryList";
import getAllProducts from "../api/products";
import ProductList from "../components/ProductList";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  console.log(data);
  return (
    <View
      style={{
        padding: 10,
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            placeholder="Search"
            style={{
              borderWidth: 0.2,
              borderRadius: 10,
              padding: 10,
              width: 350,
              backgroundColor: "#f0f0f0",
            }}
          />
        </View>
        <CategoryList />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Products
        </Text>
      </View>

      <View style={{ flex: 4 }}>
        <ProductList />
      </View>
    </View>
  );
};

export default Home;
