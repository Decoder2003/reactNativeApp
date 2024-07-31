import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Colors } from "./../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../hooks/userWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  // Authentication
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // wap
      }
    } catch (err) {
      console.error("OAuth error : ", err);
    }
  }, []);

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("./../assets/images/login.png")}
          style={{
            width: 220,
            height: 440,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: "#000",
          }}
        />
      </View>

      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Your Ultimate &nbsp;
          <Text style={{ color: Colors.PRIMARY }}>
            Community Buisness Directory
          </Text>
          App
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontFamily: "outfit",
            textAlign: "center",
            marginVertical: 15,
            color: Colors.GRAY,
          }}
        >
          Find your favourite buisness near you and post your own buisness to
          your Community
        </Text>

        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: -20,
  },

  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 100,
    marginTop: 30,
  },
});
