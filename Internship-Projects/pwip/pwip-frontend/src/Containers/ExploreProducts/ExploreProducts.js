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
  PoppinsRegular,
  PoppinsSemiBold
} from "../../Components/Text/Text";
import {
  PrimaryButton,
  SecondaryButton,
  IconButton
} from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import {
  FormField,
  DropdownField,
  CustomCounter,
  CustomDropdownField
} from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Banner } from "../../Components/Banner/Banner";
import { BottomBar } from "../../Components/BottomBar/BottomBar";

const { width, height } = Dimensions.get("window");

export default class ExploreProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          header: "GONDIA | WADSA",
          highlightedText: "NAGPUR"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor asdkfj;alsdjf;laskdjf;lskdj;lsfkj",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          header: "GONDIA | WADSA",
          highlightedText: "NAGPUR"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        },
        {
          imageSource: require("pwip/assets/images/cartSample.png"),
          title: "Sona Masuri Sonaaaaaaasdfasdfasf",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          price: "Rs. 200"
        }
      ]
    };
  }

  componentWillMount() {
    // this.props.navigation.setParams({ noShadow: true });
  }

  renderProducts = ({ item }) => {
    if (item.header) return this.renderHeader(item);
    const itemWidth = width - 48;
    return (
      <React.Fragment>
        <TouchableOpacity style={{ marginHorizontal: 24, marginVertical: 8 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
                <PoppinsSemiBold
                  numberOfLines={1}
                  size={12}
                  maxWidth={itemWidth - 150}
                  textAlign="left"
                  color={Colors.dark}
                >
                  {item.price}
                </PoppinsSemiBold>
                <CustomDropdownField
                  options={["100 gms", "200 gms", "500 gms"]}
                  // width={80}
                />
              </View>
            </View>

            <View>
              <CustomCounter
              //initialCount={10}
              />
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

  renderHeader = item => (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: 24,
        height: 20,
        marginVertical: 16
      }}
    >
      <View
        style={{
          height: 20,
          width: 3,
          backgroundColor: Colors.blue,
          marginRight: 10
        }}
      />
      <PoppinsRegular>{item.header}</PoppinsRegular>
      <PoppinsSemiBold> {item.highlightedText}</PoppinsSemiBold>
    </View>
  );

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
          onBurgerPress={() => NavigationService.navigate("exploreMap")}
        />

        <View
          style={{
            height: 30,
            flexDirection: "row",
            marginHorizontal: 24,
            justifyContent: "space-between",
            marginTop: 26
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("pwip/assets/images/riceIcon.png")}
              style={{ height: 23, width: 23, marginRight: 10 }}
              resizeMode="contain"
            />
            <PoppinsSemiBold>Rice</PoppinsSemiBold>
          </View>
          <IconButton
            bg={"transparent"}
            color={Colors.dark}
            fontFamily="Poppins-Regular"
            fontSize={14}
            height={20}
            width={60}
            noMarginT
            noPaddingH
            icon="filter-list"
            iconHeight={18}
          >
            Filter
          </IconButton>
        </View>

        <FlatList
          data={this.state.products}
          renderItem={this.renderProducts}
          contentContainerStyle={{
            width,
            alignSelf: "center"
          }}
        />
        <BottomBar items={4} total="Rs 600" mainText="Continue" />
      </SafeAreaView>
    );
  }
}
