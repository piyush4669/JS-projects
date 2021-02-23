import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  Platform,
  FlatList
} from "react-native";
import { Colors } from "../../Global/Colors";

const { width, height } = Dimensions.get("window");

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          width,
          marginVertical: 16,
          backgroundColor: this.props.bg || Colors.bg
        }}
      >
        {this.props.children}
      </View>
    );
  }
}
