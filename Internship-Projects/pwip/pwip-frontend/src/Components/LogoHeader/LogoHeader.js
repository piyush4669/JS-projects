import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Logo from "../Logo/Logo";

export default class LogoHeader extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          maxHeight: 50
        }}
      >
        <Logo />
      </View>
    );
  }
}
