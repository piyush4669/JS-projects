import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import OtpInputs from "react-native-otp-inputs";

import NavigationService from "../../../NavigationService";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import {
  HeaderText,
  SubHeaderText,
  FooterText,
  FooterTextBold,
  BodyText,
  BodyTextBold
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";

const { width, height } = Dimensions.get("window");

export default class Profile extends Component {
  render() {
    return (
      <LinearGradient colors={["#00a6e1", "#0072bb"]} style={{ height, width }}>
        <SafeAreaView
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "transparent"
          }}
        >
          <Text>Profile</Text>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
