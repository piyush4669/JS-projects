import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Platform,
  FlatList,
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
  PoppinsMedium
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import SearchBarFunc from "../../Components/SearchBar/SearchBar";

const { width, height } = Dimensions.get("window");

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaaasdfasdfasf"
        }
      ]
    };
  }

  renderSearchResults = ({ item }) => {
    const itemWidth = (width - 83) / 4;
    return (
      <TouchableOpacity style={{ marginHorizontal: 5, marginVertical: 8 }}>
        <Image
          source={item.imageSource}
          style={{
            height: itemWidth,
            width: itemWidth
          }}
          resizeMode="contain"
        />
        <PoppinsMedium
          numberOfLines={2}
          size={10}
          maxWidth={itemWidth}
          textAlign="center"
        >
          {item.title}
        </PoppinsMedium>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          position: "relative",
          backgroundColor: "transparent"
        }}
      >
        <TopNavBar
          onBurgerPress={() => NavigationService.navigate("searchVideo")}
        />

        <SearchBarFunc onPress />

        <FlatList
          data={this.state.searchResults}
          renderItem={this.renderSearchResults}
          contentContainerStyle={{
            flexDirection: "row",
            width: width - 43,
            flexWrap: "wrap",
            alignSelf: "center"
          }}
        />
      </SafeAreaView>
    );
  }
}
