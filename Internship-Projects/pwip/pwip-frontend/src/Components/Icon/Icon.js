import React, { Component } from "react";
import { TouchableOpacity, Dimensions, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import { Colors } from "../../Global/Colors";
const { width } = Dimensions.get("window");

export const BackIconLight = props => (
  <View
    style={{
      position: "absolute",
      left: props.left || 10,
      top: props.top || 10
    }}
  >
    <TouchableOpacity onPress={props.onPress}>
      <Icon
        name="chevron-left"
        type="material"
        color={props.iconColor || "rgba(255,255,255,0.56)"}
        size={35}
        iconStyle={
          props.shadow
            ? {
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0
                },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 3
              }
            : null
        }
      />
    </TouchableOpacity>
  </View>
);

export const BackIconDark = props => (
  <View style={{ position: "absolute", left: 10, top: 10 }}>
    <TouchableOpacity onPress={props.onPress}>
      <Icon name="chevron-left" type="material" color={Colors.dark} size={35} />
    </TouchableOpacity>
  </View>
);

export const HamburgerIconDark = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon name="dehaze" type="material" color={Colors.dark} size={24} />
  </TouchableOpacity>
);

export const BellIconDark = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon name="notifications" type="material" color={Colors.dark} size={24} />
  </TouchableOpacity>
);

export const StarIconDark = props => (
  <TouchableOpacity onPress={props.onPress}>
    <Icon name="star" type="material" color={Colors.dark} size={24} />
  </TouchableOpacity>
);
