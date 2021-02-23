import React from "react";
import { View, Dimensions } from "react-native";
import { BottomTabBar } from "react-navigation";
import { Colors } from "../../Global/Colors";
import {
  BackIconDark,
  HamburgerIconDark,
  BellIconDark,
  StarIconDark
} from "../Icon/Icon";
const { width, height } = Dimensions.get("window");

export default function TopNavBar(props) {
  return (
    <View
      style={{
        backgroundColor: Colors.bg,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5
        },
        shadowOpacity: 0.06,
        shadowRadius: 2,
        elevation: 3,
        flexDirection: "row",
        paddingVertical: 14,
        paddingHorizontal: 24,
        justifyContent: "space-between",
        width
      }}
    >
      <HamburgerIconDark onPress={props.onBurgerPress} />
      <View style={{ flexDirection: "row" }}>
        {props.star && <StarIconDark />}
        <View style={{ width: 16 }} />
        <BellIconDark />
      </View>
    </View>
  );
}
