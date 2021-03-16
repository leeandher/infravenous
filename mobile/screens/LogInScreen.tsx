import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";

export default function LogInScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  function placeholder() {}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.inputLabel}>Email Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="e.g. your@email.com"
      />
      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        secureTextEntry
        value={password}
        placeholder="e.g. hunter2"
      />
      <Pressable style={styles.button} onPress={placeholder}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
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
  input: {
    borderColor: "skyblue",
    borderBottomWidth: 2,
    padding: 10,
    width: "80%",
  },
  inputLabel: {
    fontWeight: "bold",
    marginTop: 30,
    color: "skyblue",
    width: "80%",
  },
  button: {
    width: "80%",
    backgroundColor: "skyblue",
    marginVertical: 15,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    width: "100%",
  },
  regularText: {
    marginBottom: 15,
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
    width: "80%",
  },
});
