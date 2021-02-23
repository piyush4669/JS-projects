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
  PoppinsMedium,
  PoppinsRegular
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import { FormField, DropdownField } from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import SearchBarFunc from "../../Components/SearchBar/SearchBar";
import { Banner } from "../../Components/Banner/Banner";

const { width, height } = Dimensions.get("window");

export default class SearchVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor asdkfj;alsdjf;laskdjf;lskdj;lsfkj",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaaasdfasdfasf",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          dateTime: "12-06-2019 | 12:30 PM"
        }
      ]
    };
  }

  renderSearchResults = ({ item }) => {
    const itemWidth = width - 48;
    return (
      <React.Fragment>
        <TouchableOpacity style={{ marginHorizontal: 24, marginVertical: 8 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={item.imageSource}
              style={{
                height: 55,
                width: 55,
                marginRight: 12
              }}
              resizeMode="contain"
            />
            <View>
              <PoppinsMedium
                numberOfLines={1}
                size={12}
                maxWidth={itemWidth - 150}
                textAlign="left"
              >
                {item.title}
              </PoppinsMedium>
              <PoppinsRegular
                numberOfLines={2}
                size={8}
                maxWidth={itemWidth - 150}
                textAlign="left"
                color={Colors.textGray}
              >
                {item.description}
              </PoppinsRegular>
              <PoppinsRegular
                numberOfLines={2}
                size={8}
                maxWidth={itemWidth - 150}
                textAlign="left"
                color={Colors.textGray}
              >
                {item.dateTime}
              </PoppinsRegular>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.gray,
            height: 1,
            marginVertical: 16,
            marginHorizontal: 24
          }}
        />
      </React.Fragment>
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
          onBurgerPress={() => NavigationService.navigate("priceChartTable")}
        />

        <SearchBarFunc onPress />

        <FlatList
          data={this.state.searchResults}
          renderItem={this.renderSearchResults}
          ListHeaderComponent={
            <View style={{ marginBottom: 16 }}>
              <Banner
                image={require("pwip/assets/images/youtube.png")}
                text="Watch Video’s to Know what
            You Never did."
                bg={"#FFBDBB"}
                textColor={Colors.dark}
                iconSize={40}
              />
            </View>
          }
          contentContainerStyle={{
            width,
            alignSelf: "center"
          }}
        />
      </SafeAreaView>
    );
  }
}
