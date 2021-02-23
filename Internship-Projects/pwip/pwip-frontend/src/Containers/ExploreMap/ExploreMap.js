// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Dimensions,
//   TouchableOpacity,
//   Animated,
//   Image,
//   Platform
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import OtpInputs from "react-native-otp-inputs";
// import MapView from "react-native-maps";

// import NavigationService from "../../../NavigationService";
// import LogoHeader from "../../Components/LogoHeader/LogoHeader";
// import {
//   HeaderText,
//   SubHeaderText,
//   FooterText,
//   FooterTextBold,
//   BodyText,
//   BodyTextBold
// } from "../../Components/Text/Text";
// import { PrimaryButton, SecondaryButton } from "../../Components/Button/Button";
// import { BackIconLight, BackIconDark } from "../../Components/Icon/Icon";
// import {
//   FormField,
//   DropdownField,
//   DropdownFieldDark
// } from "../../Components/Form/Form";
// import { Colors } from "../../Global/Colors";
// import MapMarker from "../../Components/MapMarker/MapMarker";
// import MapModal from "../../Components/MapModal/MapModal";

// const { width, height } = Dimensions.get("window");

// export default class ExploreMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       center: {
//         latitude: 20.5937,
//         longitude: 78.9629
//       },
//       markers: [
//         {
//           coordinate: {
//             latitude: 20.5937,
//             longitude: 79.9629
//           },
//           imageSource: require("pwip/assets/images/bridge.png"),
//           carouselImages: [
//             require("pwip/assets/images/rice.png"),
//             require("pwip/assets/images/rice.png"),
//             require("pwip/assets/images/rice.png")
//           ],
//           imageBG: Colors.navy,
//           title: "Sona Masuri",
//           state: "West Bengal",
//           location: "Kolkata Port",
//           mainCost: "$15 per KG",
//           subCost: "USD 450 PMT",
//           quantity: "30000 MT",
//           description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         },
//         {
//           coordinate: {
//             latitude: 16.5937,
//             longitude: 79.9629
//           },
//           imageSource: require("pwip/assets/images/landing1.png"),
//           carouselImages: [
//             require("pwip/assets/images/rice.png"),
//             require("pwip/assets/images/rice.png"),
//             require("pwip/assets/images/rice.png")
//           ],
//           title: "Masuri Sona",
//           state: "Some State",
//           location: "Some other Port",
//           mainCost: "$25 per KG",
//           subCost: "USD 550 PMT",
//           quantity: "10000 MT",
//           description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         }
//       ]
//     };
//   }
//   moveToCoordinate = coordinate => {
//     if (!this.map) return;
//     this.map.animateToRegion(
//       {
//         latitude: coordinate.latitude - 2,
//         longitude: coordinate.longitude,
//         latitudeDelta: 20,
//         longitudeDelta: 25
//       },

//       500
//     );
//   };
//   render() {
//     return (
//       <SafeAreaView
//         style={{
//           flex: 1,
//           position: "relative",
//           backgroundColor: Colors.bg
//         }}
//       >
//         <View
//           style={{
//             width,
//             height: 180,
//             paddingTop: 50,
//             backgroundColor: Colors.bg
//           }}
//         >
//           <BackIconDark
//             onPress={() => NavigationService.navigate("exploreProducts")}
//           />
//           <DropdownFieldDark placeholder="Select City" />
//           <DropdownFieldDark placeholder="Select Product" />
//         </View>

//         <MapView
//           initialRegion={{
//             latitude: 20.5937,
//             longitude: 78.9629,
//             latitudeDelta: 20,
//             longitudeDelta: 25
//           }}
//           ref={map => (this.map = map)}
//           style={{ flex: 1 }}
//           onMarkerPress={() => {}}
//           onPress={() => {
//             if (this.state.openMarker) {
//               this.state.openMarker.close();
//               this.setState({ openMarker: null });
//             }
//           }}
//         >
//           {this.state.markers.map((data, index) => (
//             <MapMarker
//               key={index}
//               onPress={this.moveToCoordinate}
//               onRef={marker => {
//                 if (this.state.openMarker) this.state.openMarker.close();
//                 this.setState({ openMarker: marker });
//               }}
//               {...data}
//             />
//           ))}
//         </MapView>
//         <MapModal
//           closed={!this.state.openMarker}
//           getData={() => this.state.openMarker.getData()}
//           onClosed={() => {
//             if (this.state.openMarker) {
//               this.state.openMarker.close();
//               this.setState({ openMarker: null });
//             }
//           }}
//           navigation={this.props.navigation}
//         />
//       </SafeAreaView>
//     );
//   }
// }

import React, { Component } from "react";
import {
  Text,
} from "react-native";
export default class ExploreMap extends Component {
    render(){
        return(
            <Text></Text>
        );
    }
}