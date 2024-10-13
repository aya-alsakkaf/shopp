import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "./CategoryCard";
import { getAllCategories } from "../api/category";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {data?.map((category, index) => (
        <CategoryCard key={category._id} name={category.name} index={index} />
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
