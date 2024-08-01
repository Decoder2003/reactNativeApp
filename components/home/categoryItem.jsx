import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function categoryItem({ category }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.ICON_BG,
          borderRadius: 100,
          marginRight: 15,
        }}
      >
        <Image
          source={{ uri: category.icon }}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "outfit-medium",
          textAlign: "center",
          marginTop: 5,
          marginLeft: -20,
        }}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}
