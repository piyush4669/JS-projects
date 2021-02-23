import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { SafeAreaView } from "react-navigation";

import NavigationService from "../../../NavigationService";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import {
  HeaderText,
  SubHeaderText,
  FooterText,
  FooterTextBold
} from "../../Components/Text/Text";
import {
  PrimaryButton,
  SecondaryButton,
  CustomButton
} from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";

const { width, height } = Dimensions.get("window");

export default class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: Colors.blue
          }}
          forceInset={{ bottom: "never" }}
        >
          <KeyboardAvoidingView
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#fff"
            }}
            behavior={Platform.OS === "ios" ? "padding" : null}
            enabled
          >
            <ScrollView style={{ backgroundColor: "#fff" }}>
              {/* Colored Padding for ScrollView */}
              <View
                style={{
                  backgroundColor: Colors.blue,
                  height,
                  position: "absolute",
                  top: -height,
                  left: 0,
                  right: 0
                }}
              />

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
                    source={require("pwip/assets/images/register.png")}
                    style={{ width: 190, height: 285 }}
                    resizeMode="center"
                  />
                </View>
                <BackIconLight
                  onPress={() => NavigationService.navigate("landing")}
                />
              </View>

              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <FormField label="FULL NAME" placeholder="Your name" />
                <FormField
                  label="COMPANY / FIRM NAME"
                  placeholder="Your company"
                />
                <DropdownField
                  defaultIndex={0}
                  options={[
                    "Retailer",
                    "Kirana Shop",
                    "Grocery Shop",
                    "Hotels & Restaurants",
                    "Food Company | Manufacturer",
                    "Wholesaler | Distributor",
                    "Brand",
                    "Exporter",
                    "Importer",
                    "Agent",
                    "Industry Watcher"
                  ]}
                  label="TYPE OF BUSINESS"
                />
                <FormField
                  label="BUSINESS REG. NO. / GST NO."
                  placeholder="Your Business reg. no. / GST no."
                />
                <DropdownField
                  defaultIndex={0}
                  options={["Rice", "Wheat", "Tea", "Coffee", "Tomatoes"]}
                  label="PRODUCT OF INTEREST"
                />
                <DropdownField
                  defaultIndex={0}
                  options={["India", "USA", "Pakistan", "Afghanistan", "China"]}
                  label="COUNTRY"
                />
                <FormField
                  label="Zip / Pin Code"
                  placeholder="Your zip / pin code"
                />
                <FormField label="MOBILE NO" placeholder="Your mobile number" />
                <FormField label="EMAIL" placeholder="Your email" />
                <PrimaryButton
                  onPress={() => NavigationService.navigate("otp")}
                >
                  REGISTER
                </PrimaryButton>
                <FooterText color={Colors.dark}>
                  Already have an account?
                </FooterText>
                <CustomButton
                  onPress={() => NavigationService.navigate("login")}
                  bg={Colors.blue}
                >
                  LOGIN
                </CustomButton>
              </View>

              {/* Scroll View Bottom Padding  */}
              <View style={{ height: 100 }} />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
