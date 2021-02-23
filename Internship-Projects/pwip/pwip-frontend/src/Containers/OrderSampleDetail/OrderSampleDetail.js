import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-looped-carousel";

import OtpInputs from "react-native-otp-inputs";

import NavigationService from "../../../NavigationService";
import LogoHeader from "../../Components/LogoHeader/LogoHeader";
import { FAB } from "../../Components/FAB/FAB";
import {
  HeaderText,
  SubHeaderText,
  FooterText,
  FooterTextBold,
  BodyText,
  BodyTextBold,
  PoppinsSemiBold,
  PoppinsRegular,
  SourceSansProRegular,
  SourceSansProBold
} from "../../Components/Text/Text";
import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";
import { BackIconLight, BackIconLightSAV } from "../../Components/Icon/Icon";
import { dataSource } from "../../Components/Table/dataSource";
import {
  FormField,
  DropdownField,
  CustomDropdownField
} from "../../Components/Form/Form";
import { Colors } from "../../Global/Colors";
import Table from "../../Components/Table/Table";
import { AddToCart } from "../../Components/CartActions/CartActions";
import { Icon } from "react-native-elements";

const { width, height } = Dimensions.get("window");

export default class OrderSampleDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height: 0.456 * width },

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
      ]
    };
  }

  render() {
    const data = this.props.navigation.getParam("data", {});
    return (
      <SafeAreaView
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: Colors.bg
        }}
      >
        <TopNavBar />
        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          <View>
            {/* <Carousel
              delay={2000}
              style={[
                { width, height: this.state.size.height + 38 },
                { zIndex: 2 }
              ]}
              bullets
              bulletStyle={{
                backgroundColor: Colors.blue,
                height: 3,
                width: 3,
                borderWidth: 0,
                marginRight: 8,
                marginLeft: 8
              }}
              chosenBulletStyle={{
                width: 9,
                height: 3,
                backgroundColor: Colors.blue,
                marginRight: 5,
                marginLeft: 5
              }}
            >
              {/* {data.carouselImages.map((data, index) => (
                <Image
                  source={data}
                  style={this.state.size}
                  resizeMode="contain"
                />
              ))} */}
            {/* </Carousel> */}

            <View
              style={{
                position: "absolute",
                zIndex: 2
              }}
            >
              <BackIconLight
                shadow
                iconColor="white"
                onPress={() => NavigationService.navigate("exploreMap")}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 24 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <PoppinsSemiBold size={20} numberOfLines={1}>
                {data.title}
              </PoppinsSemiBold>
              <SourceSansProBold>{data.mainCost}</SourceSansProBold>
            </View>
            <View style={{ height: 3 }} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <PoppinsRegular color={Colors.blue}>{data.state}</PoppinsRegular>
              <CustomDropdownField options={["100 gms", "200 gms"]} />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
                marginTop: 3,
                width: 150
              }}
            >
              <SourceSansProRegular color={Colors.blue} size={12}>
                {data.subCost}
              </SourceSansProRegular>
              <SourceSansProRegular color={Colors.blue} size={12}>
                {data.quantity}
              </SourceSansProRegular>
            </View>
            <View style={{ height: 8 }} />
            <PoppinsSemiBold numberOfLines={1}>Description</PoppinsSemiBold>
            <PoppinsRegular size={12} color={Colors.textGray} maxWidth={"100%"}>
              {data.description}
            </PoppinsRegular>
          </View>
          <View style={{ paddingHorizontal: 24, paddingTop: 20 }}>
            <Table
              height={"auto"}
              columnWidth={160}
              columns={this.state.columns}
              dataSource={dataSource}
            />
          </View>
        </ScrollView>
        <FAB
          onPress={() => {
            AddToCart(data.title).then(() =>
              NavigationService.navigate("cart")
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
