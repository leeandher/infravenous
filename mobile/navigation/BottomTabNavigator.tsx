import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AboutScreen from "../screens/AboutScreen";
import LogInScreen from "../screens/LogInScreen";
import { AboutParamList, BottomTabParamList, LogInParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="About"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="About"
        component={AboutScreenNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="information-circle-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Log In"
        component={LogInNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AboutStack = createStackNavigator<AboutParamList>();

function AboutScreenNavigator() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerTitle: "💸💳💸💳💸💳💸💳💸💳💸💳💸💳💸" }}
      />
    </AboutStack.Navigator>
  );
}

const LogInStack = createStackNavigator<LogInParamList>();

function LogInNavigator() {
  return (
    <LogInStack.Navigator>
      <LogInStack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ headerTitle: "🚀🚀🚀 Log In to your Account 🚀🚀🚀" }}
      />
    </LogInStack.Navigator>
  );
}
