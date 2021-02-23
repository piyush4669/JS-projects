import React from "react";
import { SafeAreaView } from "react-native";
import { BottomTabBar } from "react-navigation";
import { Colors } from "../../Global/Colors";

export default function NavBar(props) {
  const newState = props.navigation.state;
  const newRoute = newState.routes[newState.index];
  let stackedRoute = newRoute;
  while (stackedRoute.routes) {
    stackedRoute = stackedRoute.routes[stackedRoute.index];
  }
  const newParams = stackedRoute.params;
  const noShadow = newParams && newParams.noShadow;
  const shadow = noShadow
    ? {}
    : {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.16,
        shadowRadius: 6,

        elevation: 5
      };
  return (
    <BottomTabBar
      {...props}
      style={[
        {
          backgroundColor: Colors.bg,
          borderTopColor: "transparent"
        },
        shadow
      ]}
    />
  );
}
