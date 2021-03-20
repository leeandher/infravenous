import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          About: {
            screens: {
              AboutScreen: "about",
            },
          },
          LogIn: {
            screens: {
              LogInScreen: "login",
              IVCheckScreen: "scan",
              IVSuccessScreen: "scan-success",
              IVFailureScreen: "scan-failure",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
