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
import { PoppinsMedium } from "../Text/Text";
const { width } = Dimensions.get("window");

export const Banner = props => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 24,
      height: 63,
      paddingHorizontal: 24,
      backgroundColor: props.bg || Colors.babyBlue
    }}
  >
    <Image
      source={props.image}
      style={{ height: props.iconSize || 63, width: props.iconSize || 63 }}
      resizeMode="contain"
    />
    <View style={{ flex: 1, marginLeft: 16 }}>
      <PoppinsMedium
        color={props.textColor || Colors.blue}
        size={14}
        numberOfLines={2}
      >
        {props.text}
      </PoppinsMedium>
    </View>
  </View>
);
