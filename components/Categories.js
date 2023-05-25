import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" />    
    </ScrollView>
  );
};

export default Categories;
