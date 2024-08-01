import { View, Text, Image } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";

export default function businessItem({ business }) {
  return (
    <View
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 250,
          height: 130,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          marginTop: 7,
          gap: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 17,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 13,
            color: Colors.GRAY,
          }}
        >
          {business.address}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require("./../../assets/images/star.png")}
            ></Image>
            <Text
              style={{
                fontFamily: "outfit",
              }}
            >
              4.5
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 13,
              backgroundColor: Colors.PRIMARY,
              paddingLeft: 10,
              paddingRight: 10,
              color: "#fff",
              borderRadius: 15,
            }}
          >
            {business.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
