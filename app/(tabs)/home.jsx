import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./../../components/home/header";
import Slider from "./../../components/home/slider";
import Category from "./../../components/home/category";
import PopularBuisness from "../../components/home/popularBuisness";

export default function home() {
  return (
    <ScrollView>
      {/* header */}
      <Header />
      {/* slider */}
      <Slider />
      {/* category */}
      <Category />
      {/* popular-buisness */}
      <PopularBuisness />
      <View
        style={{
          height: 20,
        }}
      ></View>
    </ScrollView>
  );
}
