import React from "react";
import { View, Text } from "react-native";

const CategoryCard = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Text>CategoryCard</Text>
    </ScrollView>
  );
};

export default CategoryCard;
