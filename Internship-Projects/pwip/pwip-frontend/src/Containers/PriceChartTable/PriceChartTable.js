import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Platform,
  FlatList
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
  PoppinsSemiBold,
  PoppinsRegular
} from "../../Components/Text/Text";
import {
  PrimaryButton,
  SecondaryButton,
  CustomButton,
  IconButton
} from "../../Components/Button/Button";
import { BackIconLight } from "../../Components/Icon/Icon";
import {
  FormField,
  DropdownField,
  CustomDropdownField,
  DropdownFieldDark
} from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import SearchBarFunc from "../../Components/SearchBar/SearchBar";
import Table from "../../Components/Table/Table";
import { dataSource } from "../../Components/Table/dataSource";

const { width, height } = Dimensions.get("window");

export default class PriceChartTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Graph",
      columns: [
        {
          title: "Date",
          dataIndex: "date",
          width: 160
        },
        {
          title: "Price",
          dataIndex: "price",
          width: 160
        }
      ],
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
        }
      ]
    };
  }

  renderSearchResults = ({ item }) => {
    const itemWidth = width - 48;
    return (
      <View style={{ marginVertical: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8
          }}
        >
          <PoppinsSemiBold
            numberOfLines={1}
            size={12}
            maxWidth={width / 2 - 16}
            textAlign="center"
          >
            {item.title}
          </PoppinsSemiBold>
          <PoppinsRegular size={12} color={Colors.blue}>
            Add to Watch List
          </PoppinsRegular>
        </View>
        <Table
          height={"auto"}
          columnWidth={160}
          columns={this.state.columns}
          dataSource={dataSource}
        />
      </View>
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
        <TopNavBar onBurgerPress={() => NavigationService.navigate("search")} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 24,
            marginTop: 24
          }}
        >
          <DropdownFieldDark
            width={100}
            height={30}
            noMarginH
            fontSize={14}
            options={["Month", "Week", "Day"]}
            defaultIndex={0}
          />
          <CustomButton
            bg={Colors.babyBlue}
            color={Colors.dark}
            fontFamily="Poppins-Regular"
            fontSize={14}
            height={30}
            width={100}
            marginT={7}
            marginB={15}
            onPress={() => {
              if (this.state.page === "Graph") this.setState({ page: "Table" });
              else this.setState({ page: "Graph" });
            }}
          >
            {this.state.page === "Graph" ? "Table" : "Graph"}
          </CustomButton>

          <IconButton
            bg={"transparent"}
            color={Colors.dark}
            fontFamily="Poppins-Regular"
            fontSize={14}
            height={30}
            width={100}
            marginT={7}
            marginB={15}
            icon="filter-list"
            iconHeight={18}
          >
            Filter
          </IconButton>
        </View>

        {this.state.page === "Table" && (
          <FlatList
            data={this.state.searchResults}
            renderItem={this.renderSearchResults}
            contentContainerStyle={{
              width: width - 48,
              alignSelf: "center"
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}
