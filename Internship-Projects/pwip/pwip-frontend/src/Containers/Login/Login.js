import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import NavigationService from "../../../NavigationService";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import {
  HeaderText,
  SubHeaderText,
  FooterText,
  FooterTextBold
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";

const { width, height } = Dimensions.get("window");

export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={{ flex: 0, backgroundColor: Colors.blue }} />
        <SafeAreaView style={{ flex: 1, position: "relative" }}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
          >
            <View
              style={{
                width,
                height: 200,
                marginBottom: 100,
                backgroundColor: Colors.blue
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("pwip/assets/images/login.png")}
                  style={{ width: 215, height: 320 }}
                  resizeMode="center"
                />
              </View>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <DropdownField
                defaultIndex={0}
                options={[
                  "India (+91)",
                  "Pakistan (+92)",
                  "USA (+1)",
                  "Afghanistan (+93)",
                  "Peru (+51)"
                ]}
                label="MOBILE NO"
              />
              <FormField placeholder="Your mobile number" />
              <PrimaryButton onPress={() => NavigationService.navigate("otp")}>
                LOGIN
              </PrimaryButton>
              <FooterText color={Colors.dark}>
                We will send you a One Time Password {"\n"}
                message. Carrier rates may apply.
              </FooterText>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 20
              }}
            >
              <Text>
                <FooterText color={Colors.dark}>
                  Don’t have an account?
                </FooterText>{" "}
                <FooterTextBold
                  color={Colors.blue}
                  onPress={() => NavigationService.navigate("register")}
                >
                  Register Now
                </FooterTextBold>
              </Text>
            </View>
          </KeyboardAvoidingView>
          <BackIconLight
            onPress={() => NavigationService.navigate("landing")}
          />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
