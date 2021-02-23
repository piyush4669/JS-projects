import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  MaterialTopTabBar
} from "react-navigation";
import {
  Platform,
  Linking,
  View,
  ActivityIndicator,
  StatusBar,
  Text,
  SafeAreaView
} from "react-native";
import { setCustomTextInput, setCustomText } from "react-native-global-props";

import { Application } from "./router";
import NavigationService from "./NavigationService";

console.disableYellowBox = true;

// Setting default styles for all Text components.
const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: "NexaBold"
  }
};

// Setting default styles for all TextInput components.
const customTextInputProps = {
  style: {
    fontSize: 16,
    fontFamily: "NexaBold"
  }
};

setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Application
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
