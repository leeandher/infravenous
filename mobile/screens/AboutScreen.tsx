import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.horizContainer}>
        <Ionicons name="card-outline" size={60} color="black" />
        <Ionicons name="cash-outline" size={60} color="black" />
        <Ionicons name="wallet-outline" size={60} color="black" />
      </View>
      <Text style={styles.title}>Welcome to QNC Bank</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text
        style={styles.regularText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This demonstration app is intended to mimic a user-facing implementation
        in a third party app or system.
      </Text>
      <Text
        style={styles.regularText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Proceed to the 'Log In' tab below, to simulate the authentication flow
        with an Infravenous device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  horizContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  regularText: {
    marginBottom: 15,
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    width: "80%",
  },
});
