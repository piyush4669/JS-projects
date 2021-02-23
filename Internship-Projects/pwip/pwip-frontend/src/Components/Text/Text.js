import React, { Component } from "react";
import { Text, Dimensions } from "react-native";

import { Colors } from "../../Global/Colors";
const { width } = Dimensions.get("window");

export const HeaderText = props => (
  <Text
    style={{
      paddingHorizontal: 40,
      width,
      fontSize: 20,
      color: props.color || Colors.dark,
      marginVertical: 10,
      lineHeight: 30,
      fontFamily: props.fontFamily || "NexaBold",
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const SubHeaderText = props => (
  <Text
    style={{
      paddingHorizontal: 40,
      width,
      fontSize: 16,
      color: props.color || Colors.gray,
      lineHeight: 19,
      fontFamily: props.fontFamily || "NexaBold",
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const BodyText = props => (
  <Text
    style={{
      paddingHorizontal: 40,
      width,
      fontSize: 14,
      color: props.color || Colors.gray,
      lineHeight: 19,
      fontFamily: props.fontFamily || "Poppins-Regular",
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const BodyTextBold = props => (
  <Text
    style={{
      paddingHorizontal: 40,
      width,
      fontSize: 14,
      color: props.color || Colors.gray,
      lineHeight: 19,
      fontFamily: props.fontFamily || "Poppins-Bold",
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const FooterText = props => (
  <Text
    style={{
      marginTop: 10,
      fontFamily: "Poppins-Regular",
      paddingHorizontal: 70,
      width,
      fontSize: 10,
      color: props.color || Colors.light,
      lineHeight: 14,
      textAlign: props.textAlign || "center"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const FooterTextBold = props => (
  <Text
    style={{
      fontFamily: "Poppins-Bold",
      paddingHorizontal: 70,
      width,
      fontSize: 10,
      color: props.color || Colors.light,
      textAlign: props.textAlign || "center",
      lineHeight: 14
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const MapMarkerTitle = props => (
  <Text
    style={{
      fontFamily: "Poppins-SemiBold",
      fontSize: 8,
      maxWidth: 120,
      color: Colors.blue,
      textAlign: props.textAlign || "center"
    }}
    onPress={props.onPress}
    numberOfLines={1}
  >
    {props.children}
  </Text>
);

export const MapModalTitle = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "Montserrat-SemiBold",
      fontSize: 16,
      maxWidth: 200,
      color: Colors.dark,
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
    numberOfLines={1}
  >
    {props.children}
  </Text>
);

export const MapModalMainCostText = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "SourceSansPro-Bold",
      fontSize: 14,
      maxWidth: 120,
      color: Colors.dark,
      textAlign: props.textAlign || "right"
    }}
    onPress={props.onPress}
    numberOfLines={1}
  >
    {props.children}
  </Text>
);

export const MapModalSubText = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "SourceSansPro-Regular",
      fontSize: 12,
      lineHeight: 18,
      color: props.color || Colors.textGray,
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const MainHeader = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "Poppins-SemiBold",
      fontSize: 16,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left"
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const ActionBoxText = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "Poppins-Medium",
      fontSize: 12,
      lineHeight: 13,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "center",
      maxWidth: 60
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const PlaceText = props => (
  <Text
    style={{
      fontFamily: props.fontFamily || "Poppins-Bold",
      fontSize: 10,
      lineHeight: 14,
      color: props.color || Colors.white,
      textAlign: props.textAlign || "left",
      maxWidth: 80
    }}
    onPress={props.onPress}
  >
    {props.children}
  </Text>
);

export const NexaBold = props => (
  <Text
    style={{
      fontFamily: "NexaBold",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);

export const PoppinsSemiBold = props => (
  <Text
    style={{
      fontFamily: "Poppins-SemiBold",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);

export const PoppinsRegular = props => (
  <Text
    style={{
      fontFamily: "Poppins-Regular",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);

export const PoppinsMedium = props => (
  <Text
    style={{
      fontFamily: "Poppins-Medium",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);

export const SourceSansProRegular = props => (
  <Text
    style={{
      fontFamily: "SourceSansPro-Regular",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);

export const SourceSansProBold = props => (
  <Text
    style={{
      fontFamily: "SourceSansPro-Bold",
      fontSize: props.size || 16,
      lineHeight: props.lineHeight || props.size + 4 || 20,
      color: props.color || Colors.dark,
      textAlign: props.textAlign || "left",
      maxWidth: props.maxWidth || 200
    }}
    onPress={props.onPress}
    numberOfLines={props.numberOfLines}
  >
    {props.children}
  </Text>
);
