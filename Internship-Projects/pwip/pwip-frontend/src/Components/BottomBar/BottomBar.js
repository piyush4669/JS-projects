import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  Image
} from "react-native";
import { Icon } from "react-native-elements";

import { Colors } from "../../Global/Colors";
import { SafeAreaView } from "react-navigation";
import { PoppinsMedium, PoppinsSemiBold, NexaBold } from "../Text/Text";
const { width } = Dimensions.get("window");

export const BottomBar = props => (
  <View
    style={{
      backgroundColor: Colors.bg,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -5
      },
      shadowOpacity: 0.06,
      shadowRadius: 2,
      elevation: 3,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width,
      height: 50,
      paddingLeft: 24
    }}
  >
    <PoppinsSemiBold size={12}>{props.items} items</PoppinsSemiBold>
    <PoppinsSemiBold size={12} color={Colors.blue}>
      {props.total}
    </PoppinsSemiBold>
    <TouchableOpacity
      style={{
        backgroundColor: Colors.blue,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        flexDirection: "row"
      }}
    >
      <NexaBold color={Colors.light}>{props.mainText}</NexaBold>
      <View style={{ width: 16 }} />
      <Icon
        name="arrow-forward"
        type="material"
        color={Colors.light}
        size={24}
      />
    </TouchableOpacity>
  </View>
);
