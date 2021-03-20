export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  About: undefined;
  "Log In": undefined;
};

export type AboutParamList = {
  About: undefined;
};

export type LogInParamList = {
  LogIn: undefined;
  IVCheck: {
    email: string;
    time: string;
  };
  IVSuccess: undefined;
  IVFailure: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
