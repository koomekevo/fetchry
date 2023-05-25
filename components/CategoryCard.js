import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-20 w-20 rounded'
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
