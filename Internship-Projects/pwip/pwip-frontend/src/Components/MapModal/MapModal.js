// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Dimensions,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
//   Image,
//   Platform
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import OtpInputs from "react-native-otp-inputs";
// import MapView from "react-native-maps";
// import Interactable from "react-native-interactable";

// import NavigationService from "../../../NavigationService";
// import LogoHeader from "../../Components/LogoHeader/LogoHeader";
// import {
//   HeaderText,
//   SubHeaderText,
//   FooterText,
//   FooterTextBold,
//   BodyText,
//   BodyTextBold,
//   MapModalTitle,
//   MapModalMainCostText,
//   MapModalSubText
// } from "../../Components/Text/Text";
// import {
//   PrimaryButton,
//   SecondaryButton,
//   Button
// } from "../../Components/Button/Button";
// import { BackIconLight, BackIconDark } from "../../Components/Icon/Icon";
// import {
//   FormField,
//   DropdownField,
//   DropdownFieldDark
// } from "../../Components/Form/Form";
// import { Colors } from "../../Global/Colors";
// import MapMarker from "../../Components/MapMarker/MapMarker";

// const { width, height } = Dimensions.get("window");

// export default class MapModal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mounted: false
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       mounted: true
//     });
//   }

//   onSnapStart = event => {
//     const snapPointIndex = event.nativeEvent.index;
//     if (snapPointIndex === 0) {
//       if (this.props.onClosed) this.props.onClosed();
//     }
//   };

//   checkForceClose = () => {
//     if (this.state.mounted) {
//       if (this.props.closed) {
//         this.close();
//       } else {
//         this.open();
//       }
//     }
//   };

//   open = () => {
//     this.bottomSheet.snapTo({ index: 1 });
//   };

//   close = () => {
//     this.bottomSheet.snapTo({ index: 0 });
//     this.props.onClosed();
//   };

//   render() {
//     this.checkForceClose();
//     let data = null;
//     if (!this.props.closed) data = this.props.getData();
//     return (
//       <Interactable.View
//         ref={bs => {
//           this.bottomSheet = bs;
//         }}
//         onSnapStart={this.onSnapStart}
//         verticalOnly
//         snapPoints={[{ y: 230 }, { y: 0 }]}
//         initialPosition={{ y: 230 }}
//         boundaries={{ top: 0 }}
//         style={{
//           height: 230,
//           width,
//           backgroundColor: Colors.bg,
//           position: "absolute",
//           bottom: 0
//         }}
//       >
//         {data && (
//           <View style={{ padding: 21 }}>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "space-between",
//                 marginBottom: 8
//               }}
//             >
//               <MapModalTitle>{data.title}</MapModalTitle>
//               <MapModalMainCostText>{data.mainCost}</MapModalMainCostText>
//             </View>

//             <MapModalSubText color={Colors.blue}>
//               {data.location}
//             </MapModalSubText>

//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "flex-start",
//                 marginBottom: 8
//               }}
//             >
//               <MapModalSubText color={Colors.blue}>
//                 {data.subCost}
//               </MapModalSubText>
//               <View style={{ width: 22 }} />
//               <MapModalSubText color={Colors.blue}>
//                 {data.quantity}
//               </MapModalSubText>
//             </View>
//             <View style={{ paddingVertical: 5 }}>
//               <MapModalTitle>Description</MapModalTitle>
//             </View>
//             <ScrollView style={{ height: 70 }}>
//               <MapModalSubText>{data.description}</MapModalSubText>
//             </ScrollView>
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "flex-end"
//               }}
//             >
//               <Button
//                 height={26}
//                 fontSize={12}
//                 marginTop={5}
//                 onPress={() =>
//                   NavigationService.navigate("orderSampleDetail", { data })
//                 }
//               >
//                 ORDER SAMPLE
//               </Button>
//               <View style={{ width: 10 }} />
//               <Button height={26} fontSize={12} marginTop={5} bg={Colors.blue}>
//                 BOOK
//               </Button>
//             </View>
//           </View>
//         )}
//       </Interactable.View>
//     );
//   }
// }
