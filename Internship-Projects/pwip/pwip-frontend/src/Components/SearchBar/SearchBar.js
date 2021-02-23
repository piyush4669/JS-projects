import React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { BottomTabBar } from "react-navigation";
import { Colors } from "../../Global/Colors";
import {
  BackIconDark,
  HamburgerIconDark,
  BellIconDark,
  StarIconDark
} from "../Icon/Icon";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-elements";
const { width, height } = Dimensions.get("window");

export default function SearchBarFunc(props) {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#f5f5f5",
        height: 35,
        width: width - 48,
        marginHorizontal: 24,
        borderRadius: 4,
        justifyContent: "center",
        paddingLeft: 8,
        marginVertical: 16
      }}
    >
      <SearchBar
        placeholder="Search"
      />

      <View style={{ position: "absolute", right: 8 }}>
        <Icon name="search" type="material" color={Colors.black} size={20} />
      </View>
    </TouchableOpacity>
  );
}
