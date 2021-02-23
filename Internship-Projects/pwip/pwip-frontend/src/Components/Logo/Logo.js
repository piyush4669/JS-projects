import React, { Component } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

export default (Logo = () => (
  <View>
    <Image
      source={require("pwip/assets/images/logo.png")}
      style={{ width: 55 }}
      resizeMode="contain"
    />
  </View>
));
