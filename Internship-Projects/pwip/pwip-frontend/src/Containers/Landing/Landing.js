import React, { Component } from "react";
import { View, Text, SafeAreaView, Dimensions, Image } from "react-native";
import Carousel from "react-native-looped-carousel";

import NavigationService from "../../../NavigationService";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import {
  HeaderText,
  SubHeaderText,
  FooterText,
  FooterTextBold
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { Colors } from "../../Global/Colors";

const { width, height } = Dimensions.get("window");

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height: width + 50 }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LogoHeader />

        <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
          <Carousel
            delay={2000}
            style={[this.state.size, { zIndex: 2 }]}
            autoplay
          >
            {/* Slide 1 */}
            <View style={[{ backgroundColor: "transparent" }, this.state.size]}>
              <HeaderText>Discover Products</HeaderText>
              <SubHeaderText>
                Discover and explore a variety of Products
              </SubHeaderText>
              <View>
                <Image
                  source={require("pwip/assets/images/landing1.png")}
                  style={{ width, height: width }}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Slide 2 */}
            <View style={[{ backgroundColor: "transparent" }, this.state.size]}>
              <HeaderText>Discover real-time price</HeaderText>
              <SubHeaderText>
                Discover real-time price of your favorite Products
              </SubHeaderText>
              <View>
                <Image
                  source={require("pwip/assets/images/landing2.png")}
                  style={{ width, height: width }}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Slide 3 */}
            <View style={[{ backgroundColor: "transparent" }, this.state.size]}>
              <HeaderText>Discover amazing prices</HeaderText>
              <SubHeaderText>
                Discover real-time prices of your favorites
              </SubHeaderText>
              <View>
                <Image
                  source={require("pwip/assets/images/landing3.png")}
                  style={{ width, height: width }}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Carousel>

          <View
            style={{
              backgroundColor: Colors.blue,
              height: "100%",
              width,
              marginTop: -width / 4
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <PrimaryButton onPress={() => NavigationService.navigate("login")}>
            LOGIN
          </PrimaryButton>
          <SecondaryButton
            onPress={() => NavigationService.navigate("register")}
          >
            REGISTER
          </SecondaryButton>
          <FooterText>
            By signing up you agree to our {"\n"}
            <FooterTextBold>Terms of Use</FooterTextBold> and{" "}
            <FooterTextBold>Privacy Policy</FooterTextBold>
          </FooterText>
        </View>
      </SafeAreaView>
    );
  }
}
