import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Platform,
  ScrollView
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
  BodyTextBold,
  PoppinsSemiBold,
  PoppinsMedium,
  PoppinsRegular
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import {
  FormField,
  DropdownField,
  CustomDropdownField,
  CustomCounter
} from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import { getCart } from "../../Components/CartActions/CartActions";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import { Banner } from "../../Components/Banner/Banner";
import { BottomBar } from "../../Components/BottomBar/BottomBar";

const { width, height } = Dimensions.get("window");

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      exploreProducts: ["Sona Masuri"]
    };
  }
  componentWillMount() {
    this.props.navigation.setParams({ noShadow: true });
  }
  render() {
    getCart().then(data => this.setState({ cart: JSON.parse(data) }));
    return (
      <SafeAreaView
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: "transparent"
        }}
      >
        <TopNavBar />

        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 24,
              marginTop: 30,
              alignItems: "center"
            }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                backgroundColor: Colors.babyBlue,
                marginRight: 10
              }}
            />
            <PoppinsSemiBold>Order Sample</PoppinsSemiBold>
          </View>
          {this.state.cart &&
            this.state.cart.map(data => (
              <View
                style={{
                  paddingTop: 24,
                  paddingHorizontal: 24,
                  flexDirection: "row"
                }}
              >
                <Image
                  source={require("pwip/assets/images/cartSample.png")}
                  style={{ height: 36, width: 36 }}
                  resizeMode="contain"
                />
                <View style={{ paddingLeft: 10 }}>
                  <PoppinsMedium size={12}>{data}</PoppinsMedium>
                  <View style={{ height: 3 }} />
                  <CustomDropdownField
                    options={["100 gms", "200 gms", "500 gms"]}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <CustomCounter />
                  <View style={{ width: 14 }} />
                  <PoppinsMedium size={12}>Rs. 200</PoppinsMedium>
                </View>
              </View>
            ))}

          <View
            style={{
              flex: 1,
              backgroundColor: Colors.gray,
              height: 1,
              margin: 32
            }}
          />

          {this.state.exploreProducts && (
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 24,
                marginTop: 10,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: Colors.babyBlue,
                  marginRight: 10
                }}
              />
              <PoppinsSemiBold>Products from Explore</PoppinsSemiBold>
            </View>
          )}
          {this.state.exploreProducts.map(data => (
            <View
              style={{
                paddingTop: 24,
                paddingHorizontal: 24,
                flexDirection: "row"
              }}
            >
              <Image
                source={require("pwip/assets/images/cartSample.png")}
                style={{ height: 36, width: 36 }}
                resizeMode="contain"
              />
              <View style={{ paddingLeft: 10 }}>
                <PoppinsMedium size={12}>{data}</PoppinsMedium>
                <View style={{ height: 3 }} />
                <CustomDropdownField
                  options={["100 gms", "200 gms", "500 gms"]}
                />
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flex: 1,
                  flexDirection: "row"
                }}
              >
                <CustomCounter />
                <View style={{ width: 14 }} />
                <PoppinsMedium size={12}>Rs. 200</PoppinsMedium>
              </View>
            </View>
          ))}
          {this.state.exploreProducts && (
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.gray,
                height: 1,
                margin: 24
              }}
            />
          )}

          <View
            style={{
              flexDirection: "row",
              paddingLeft: 24,
              alignItems: "center",
              marginBottom: 16,
              marginTop: 10
            }}
          >
            <View
              style={{
                height: 24,
                width: 24,
                backgroundColor: Colors.babyBlue,
                marginRight: 10
              }}
            />
            <View>
              <PoppinsSemiBold>Contact Details</PoppinsSemiBold>
              <PoppinsRegular size={8}>Click to edit</PoppinsRegular>
            </View>
          </View>

          <FormField
            label="MOBILE NO"
            placeholder="Your mobile number"
            marginHorizontal={24}
          />

          <FormField
            label="EMAIL"
            placeholder="Your email"
            marginHorizontal={24}
          />

          <Banner
            image={require("pwip/assets/images/bridge.png")}
            text="Above Details will be used to Contact you."
          />

          <View style={{ margin: 24, marginBottom: 100 }}>
            <PoppinsRegular
              size={12}
              color={Colors.textGray}
              maxWidth={width - 48}
            >
              You will receive call from our team with 48 hours.
            </PoppinsRegular>
          </View>
        </ScrollView>

        <BottomBar
          items={this.state.cart && this.state.cart.length}
          total="Rs 600"
          mainText="Arrange Call"
        />
      </SafeAreaView>
    );
  }
}
