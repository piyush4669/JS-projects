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
// import MapView from "react-native-maps";

// import NavigationService from "../../../NavigationService";
// import LogoHeader from "../../Components/LogoHeader/LogoHeader";
// import {
//   HeaderText,
//   SubHeaderText,
//   FooterText,
//   FooterTextBold,
//   BodyText,
//   BodyTextBold,
//   MapMarkerTitle
// } from "../../Components/Text/Text";
// import { Colors } from "../../Global/Colors";

// const { width, height } = Dimensions.get("window");

// export default class MapMarker extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       containerHeight: new Animated.Value(16),
//       height: new Animated.Value(16),
//       width: new Animated.Value(130),
//       paddingHorizontal: new Animated.Value(3),
//       textSize: new Animated.Value(8),
//       textColor: new Animated.Value(0), //0-> Blue, 150->Black
//       image: {
//         height: new Animated.Value(20),
//         width: new Animated.Value(0)
//       },
//       subtext: {
//         opacity: new Animated.Value(0)
//       }
//     };
//   }

//   open = () => {
//     setTimeout(() => {
//       this.props.onRef(this);
//     }, 200);
//     this.setState({ isOpen: true });
//     Animated.parallel([
//       Animated.timing(this.state.containerHeight, {
//         toValue: 35
//       }),
//       Animated.timing(this.state.height, {
//         toValue: 35
//       }),
//       Animated.timing(this.state.image.height, {
//         toValue: 35
//       }),
//       Animated.timing(this.state.image.width, {
//         toValue: 35
//       }),
//       Animated.timing(this.state.paddingHorizontal, {
//         toValue: 8
//       }),
//       Animated.timing(this.state.textSize, {
//         toValue: 10
//       }),
//       Animated.timing(this.state.textColor, {
//         toValue: 150
//       }),
//       Animated.timing(this.state.subtext.opacity, {
//         toValue: 1,
//         delay: 300
//       })
//     ]).start();
//   };
//   close = () => {
//     this.setState({ isOpen: false });
//     Animated.parallel([
//       Animated.timing(this.state.containerHeight, {
//         toValue: 16
//       }),
//       Animated.timing(this.state.height, {
//         toValue: 16
//       }),
//       Animated.timing(this.state.image.height, {
//         toValue: 20
//       }),
//       Animated.timing(this.state.image.width, {
//         toValue: 0
//       }),
//       Animated.timing(this.state.paddingHorizontal, {
//         toValue: 3
//       }),
//       Animated.timing(this.state.textSize, {
//         toValue: 8
//       }),
//       Animated.timing(this.state.textColor, {
//         toValue: 0
//       }),
//       ,
//       Animated.timing(this.state.subtext.opacity, {
//         toValue: 0,
//         duration: 200
//       })
//     ]).start();
//   };

//   getData = () => ({ ...this.props });

//   render() {
//     const coordinate = this.props.coordinate || {
//       latitude: 21.1458,
//       longitude: 79.0882
//     };

//     const fontColor = this.state.textColor.interpolate({
//       inputRange: [0, 150],
//       outputRange: [Colors.blue, Colors.black]
//     });

//     return (
//       <MapView.Marker
//         coordinate={coordinate}
//         centerOffset={{ x: 0, y: -20 }}
//         key={this.props.key}
//         onPress={() => {
//           if (this.state.isOpen) {
//             this.close();
//             this.props.onRef(null);
//           } else {
//             this.props.onPress(coordinate);
//             this.open();
//           }
//         }}
//       >
//         <Animated.View
//           style={{
//             minHeight: 43,
//             width: "auto",
//             flex: 1,
//             justifyContent: "flex-end"
//           }}
//         >
//           <TouchableOpacity
//             style={{
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             <Animated.View
//               style={{
//                 flex: 1,
//                 flexDirection: "row",
//                 height: this.state.containerHeight,
//                 shadowColor: Colors.blue,
//                 shadowOffset: {
//                   width: 0,
//                   height: 3
//                 },
//                 shadowOpacity: 0.27,
//                 shadowRadius: 2.65,

//                 elevation: 6
//               }}
//             >
//               <Animated.View
//                 style={{
//                   width: this.state.image.width,
//                   height: this.state.image.height,
//                   backgroundColor: this.props.imageBG || Colors.navy,
//                   justifyContent: "center",
//                   alignItems: "center"
//                 }}
//               >
//                 <Animated.Image
//                   source={this.props.imageSource}
//                   style={{
//                     width: Animated.add(
//                       this.state.image.width,
//                       new Animated.Value(-10)
//                     ),
//                     height: Animated.add(
//                       this.state.image.height,
//                       new Animated.Value(-10)
//                     ),
//                     backgroundColor: this.props.imageBG || Colors.navy
//                   }}
//                   resizeMode="contain"
//                 />
//               </Animated.View>
//               <Animated.View
//                 style={{
//                   minWidth: 50,
//                   maxWidth: 123,
//                   height: this.state.height,
//                   backgroundColor: Colors.white,
//                   padding: 3,
//                   paddingHorizontal: this.state.paddingHorizontal
//                 }}
//               >
//                 <Animated.Text
//                   style={{
//                     fontFamily: "Poppins-SemiBold",
//                     fontSize: this.state.textSize,
//                     color: fontColor,
//                     maxWidth: 120,
//                     textAlign: "center"
//                   }}
//                   numberOfLines={1}
//                 >
//                   {this.props.title}
//                 </Animated.Text>
//                 <Animated.Text
//                   style={{
//                     fontFamily: "Poppins-Regular",
//                     fontSize: 8,
//                     opacity: this.state.subtext.opacity,
//                     color: Colors.blue,
//                     maxWidth: 120,
//                     marginTop: -2,
//                     textAlign: "left"
//                   }}
//                   numberOfLines={1}
//                 >
//                   {this.props.state}
//                 </Animated.Text>
//               </Animated.View>
//             </Animated.View>
//             <Animated.View
//               style={{
//                 shadowColor: Colors.blue,
//                 shadowOffset: {
//                   width: 0,
//                   height: 3
//                 },
//                 shadowOpacity: 0.27,
//                 shadowRadius: 2.65,
//                 elevation: 6,
//                 width: 0,
//                 height: 0,
//                 borderLeftWidth: 8,
//                 borderRightWidth: 8,
//                 borderTopWidth: 8,
//                 borderStyle: "solid",
//                 backgroundColor: "transparent",
//                 borderLeftColor: "transparent",
//                 borderRightColor: "transparent",
//                 borderTopColor: Colors.white
//               }}
//             />
//           </TouchableOpacity>
//         </Animated.View>
//       </MapView.Marker>
//     );
//   }
// }
