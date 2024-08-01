import { View, Text } from "react-native";
import React from "react";
import Header from "./../../components/home/header";
import Slider from "./../../components/home/slider";
import Category from "./../../components/home/category";

export default function home() {
  return (
    <View>
      {/* header */}
      <Header />
      {/* slider */}
      <Slider />
      {/* category */}
      <Category />
      {/* popular-buisness */}
    </View>
  );
}
