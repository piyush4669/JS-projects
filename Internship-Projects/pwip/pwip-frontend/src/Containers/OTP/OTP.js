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

export default class OTP extends Component {
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
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <HeaderText
              color={Colors.light}
              textAlign="center"
              fontFamily="Poppins-SemiBold"
            >
              Verification Code
            </HeaderText>
            <SubHeaderText
              color={Colors.light}
              textAlign="center"
              fontFamily="Poppins-Regular"
            >
              Please enter One Time Password sent to +918660609286
            </SubHeaderText>
            <View style={{ height: 50, marginTop: 30 }}>
              <OtpInputs
                handleChange={code => console.log(code)}
                numberOfInputs={5}
                inputStyles={{
                  color: Colors.light,
                  fontFamily: "Poppins-Regular",
                  fontSize: 16,
                  height: 45,
                  marginTop: Platform.OS === "ios" ? -7 : 0
                }}
                inputContainerStyles={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: 4,
                  height: 40,
                  overflow: "hidden"
                }}
                unfocusedBorderColor={"rgba(0,0,0,0)"}
                handleChange={text => {}} //Handle OTP change
              />
            </View>
            <View style={{ marginTop: 10, marginBottom: 20 }}>
              <BodyText color={Colors.light} textAlign="center">
                Didn’t receive?{" "}
                <BodyTextBold color={Colors.light} textAlign="center">
                  Send Again
                </BodyTextBold>
              </BodyText>
            </View>
            <PrimaryButton onPress={() => NavigationService.navigate("home")}>
              SUBMIT
            </PrimaryButton>
            <BackIconLight onPress={() => NavigationService.goBack()} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
