import React, { Component } from "react";
import { TouchableOpacity, Dimensions, Text } from "react-native";
import { Icon } from "react-native-elements";

import { Colors } from "../../Global/Colors";
const { width } = Dimensions.get("window");

export const PrimaryButton = props => (
  <TouchableOpacity
    style={{
      width: width - 80,
      fontSize: 20,
      backgroundColor: Colors.dark,
      marginTop: 20,
      height: 40,
      justifyContent: "center",
      borderRadius: 4
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        color: Colors.light,
        fontSize: 16,
        textAlign: "center",
        paddingTop: 4
      }}
    >
      {props.children}
    </Text>
  </TouchableOpacity>
);

export const SecondaryButton = props => (
  <TouchableOpacity
    style={{
      width: width - 80,
      fontSize: 20,
      backgroundColor: Colors.light,
      marginBottom: 10,
      marginTop: 20,
      height: 40,
      justifyContent: "center",
      borderRadius: 4
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        color: Colors.dark,
        fontSize: 16,
        textAlign: "center",
        paddingTop: 4
      }}
    >
      {props.children}
    </Text>
  </TouchableOpacity>
);

export const CustomButton = props => (
  <TouchableOpacity
    style={{
      width: props.width || width - 80,
      fontSize: props.fontSize || 20,
      backgroundColor: props.bg || Colors.dark,
      marginTop: props.noMarginT || props.marginT || 20,
      marginBottom: props.noMarginB || props.marginB || 20,
      height: props.height || 40,
      justifyContent: "center",
      borderRadius: props.borderRadius || 4
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        color: props.color || Colors.light,
        fontSize: props.fontSize || 16,
        fontFamily: props.fontFamily || "NexaBold",
        textAlign: "center",
        paddingTop: props.paddingT || 4
      }}
    >
      {props.children}
    </Text>
  </TouchableOpacity>
);

export const Button = props => (
  <TouchableOpacity
    style={{
      width: props.width || "auto",
      backgroundColor: props.bg || Colors.dark,
      marginTop: props.marginTop || 0,
      height: props.height || 40,
      justifyContent: "center",
      borderRadius: props.borderRadius || 2,
      paddingHorizontal: 8
    }}
    onPress={props.onPress}
  >
    <Text
      style={{
        color: props.color || Colors.light,
        fontSize: props.fontSize || 16,
        textAlign: "center",
        paddingTop: 4
      }}
    >
      {props.children}
    </Text>
  </TouchableOpacity>
);

export const IconButton = props => (
  <TouchableOpacity
    style={{
      width: props.width || width - 80,
      fontSize: props.fontSize || 20,
      backgroundColor: props.bg || Colors.dark,
      marginTop:20,
      marginBottom:20,
      height: props.height || 40,
      justifyContent: "center",
      borderRadius: props.borderRadius || 4,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }}
    onPress={props.onPress}
  >
    <Icon
      name={props.icon}
      type="material"
      color={props.color || Colors.light}
      size={props.iconHeight || 40}
    />
    <Text
      style={{
        color: props.color || Colors.light,
        fontSize: props.fontSize || 16,
        fontFamily: props.fontFamily || "NexaBold",
        textAlign: "center",
        paddingLeft: 3,
        paddingTop: 2
      }}
    >
      {props.children}
    </Text>
  </TouchableOpacity>
);
