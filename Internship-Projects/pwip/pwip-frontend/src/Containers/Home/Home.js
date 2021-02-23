import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Animated,
  Platform,
  FlatList,
  ScrollView,
  TouchableOpacity
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
  MainHeader,
  ActionBoxText,
  PlaceText
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import MainContainer from "../../Components/MainContainer/MainContainer";

const { width, height } = Dimensions.get("window");

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salesBanners: [
        { source: require("pwip/assets/images/sale1.png") },
        { source: require("pwip/assets/images/sale2.png") }
      ],
      actionBoxes: [
        {
          source: require("pwip/assets/images/box.png"),
          title: "Order Samples",
          direction: "orderSampleDetail"
        },
        {
          source: require("pwip/assets/images/binoculars.png"),
          title: "Bulk Orders",
          direction: "orderSampleDetail"
        },
        {
          source: require("pwip/assets/images/phone-call.png"),
          title: "Arrange Call Back",
          direction: "searchVideo"
        },
        {
          source: require("pwip/assets/images/price.png"),
          title: "Price Chart",
          direction: "priceChartTable"
        },
        {
          source: require("pwip/assets/images/youtube.png"),
          title: "Video Learning",
          direction: "searchVideo"
        },
        {
          source: require("pwip/assets/images/delivery.png"),
          title: "Favorites",
          direction: "searchVideo"
        }
      ],
      places: [
        { source: require("pwip/assets/images/Nagpur.png"), title: "Nagpur" },
        { source: require("pwip/assets/images/Nagpur.png"), title: "Nagpur" },
        { source: require("pwip/assets/images/Nagpur.png"), title: "Nagpur" }
      ]
    };
  }

  renderSalesBanners = ({ item }) => {
    return (
      <View>
        <Image
          source={item.source}
          style={{
            height: 104,
            width: 204,
            marginHorizontal: 8,
            borderRadius: 4
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

  renderActionBoxes = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => NavigationService.navigate(item.direction)}>
      <View
        style={{
          borderColor: "rgba(112, 112, 112, 0.08)",
          borderWidth: 1,
          padding: 8,
          paddingBottom: 4,
          height: 90,
          width: 94,
          justifyContent: "center",
          alignItems: "center",
          margin: 7
        }}>
        <Image
          source={item.source}
          style={{
            height: 30,
            width: 30,
            margin: 8
          }}
          resizeMode="contain"
        />
        <ActionBoxText>{item.title}</ActionBoxText>
      </View>
      </TouchableOpacity>
    );
  };

  renderPlaces = ({ item }) => {
    return (
      <View>
        <Image
          source={item.source}
          style={{
            height: 112,
            width: 93,
            marginHorizontal: 8,
            borderRadius: 4
          }}
          resizeMode="contain"
        />
        <LinearGradient
          colors={["rgba(10, 18, 42, 0.02)", "rgba(10, 18, 42, 0.76)"]}
          style={{
            height: 112,
            width: 90,
            marginHorizontal: 8,
            borderRadius: 4,
            position: "absolute"
          }}
        >
          <View style={{ position: "absolute", bottom: 8, left: 4 }}>
            <PlaceText>{item.title}</PlaceText>
          </View>
        </LinearGradient>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: Colors.bg
        }}
      >
        <TopNavBar star />

        <ScrollView>
          <FlatList
            data={this.state.salesBanners}
            renderItem={this.renderSalesBanners}
            contentContainerStyle={{
              marginTop: 16,
              paddingLeft: 16,
              paddingRight: 16
            }}
            style={{
              maxHeight: 136
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <MainContainer>
            <View style={{ paddingHorizontal: 24, paddingTop: 8 }}>
              <MainHeader>What would you like to do today?</MainHeader>
            </View>

            <FlatList
              data={this.state.actionBoxes}
              renderItem={this.renderActionBoxes}
              contentContainerStyle={{
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16
              }}
              numColumns={3}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </MainContainer>

          <MainContainer bg="rgba(0,114,187,0.12)">
            <View style={{ paddingHorizontal: 24, paddingTop: 8 }}>
              <MainHeader>Select Product based on Region</MainHeader>
            </View>

            <FlatList
              data={this.state.places}
              renderItem={this.renderPlaces}
              contentContainerStyle={{
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingBottom: 16
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </MainContainer>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
