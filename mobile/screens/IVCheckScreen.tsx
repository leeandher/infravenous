import * as React from "react";
import { StyleSheet } from "react-native";

import { useQuery, gql } from "@apollo/client";
import { Text, View } from "../components/Themed";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, StackActions } from "@react-navigation/native";
import { LogInParamList } from "../types";
import { FontAwesome } from "@expo/vector-icons";

type IVCheckScreenNavigationProp = StackNavigationProp<
  LogInParamList,
  "IVCheck"
>;
type IVCheckScreenProps = {
  navigation: IVCheckScreenNavigationProp;
  route: RouteProp<LogInParamList, "IVCheck">;
};

const VALIDATE_USER_QUERY = gql`
  query VALIDATE_USER_QUERY($email: String!) {
    allUsers(where: { email: $email }) {
      attempts(sortBy: scanTime_DESC, first: 1) {
        scanTime
        result
      }
    }
  }
`;

export default function IVCheckScreen({
  route,
  navigation,
}: IVCheckScreenProps) {
  const { email, time } = route.params;
  const startTime = new Date(time);

  const { data, error } = useQuery(VALIDATE_USER_QUERY, {
    variables: { email },
    notifyOnNetworkStatusChange: true,
    pollInterval: 500,
    fetchPolicy: "network-only",
  });

  if (data) {
    const latestAttempt = data.allUsers[0].attempts[0];
    const latestScanTime = new Date(latestAttempt.scanTime);
    const isValid = latestScanTime > startTime;
    const isAuthenticated = latestAttempt.result === "Success";

    if (isValid && isAuthenticated) {
      navigation.dispatch(StackActions.replace("IVSuccess"));
    } else if (isValid && !isAuthenticated) {
      navigation.dispatch(StackActions.replace("IVFailure"));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awaiting Infravenous Scan...</Text>
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
        Go ahead and scan your finger in an Infravenous device paired with your
        email:
      </Text>
      <Text style={styles.fancyText}>{email}</Text>
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
  fancyText: {
    marginBottom: 15,
    fontSize: 19,
    lineHeight: 24,
    textAlign: "center",
    width: "80%",
    color: "skyblue",
    fontWeight: "bold",
  },
});
