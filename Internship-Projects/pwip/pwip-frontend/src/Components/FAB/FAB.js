import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput
} from "react-native";
import { Icon } from "react-native-elements";

import { Colors } from "../../Global/Colors";
import { SafeAreaView } from "react-navigation";
const { width } = Dimensions.get("window");

export const FAB = props => (
  <SafeAreaView
    style={{
      position: "absolute",
      flex: 1,
      bottom: 47,
      right: 31
    }}
  >
    <TouchableOpacity
      style={{
        height: 54,
        width: 54,
        borderRadius: 27,
        backgroundColor: Colors.blue,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={props.onPress}
    >
      <Icon name="add" type="material" color={Colors.light} size={35} />
    </TouchableOpacity>
  </SafeAreaView>
);
