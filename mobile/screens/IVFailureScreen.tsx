import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function IVCheckScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oops!</Text>
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
        We received a failure alert from Infravenous, why don't you try and scan
        your finger again?
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
