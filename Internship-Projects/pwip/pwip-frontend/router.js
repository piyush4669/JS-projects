import React from "react";
import { Icon } from "react-native-elements";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  StackActions
} from "react-navigation";
import Landing from "./src/Containers/Landing/Landing";
import Register from "./src/Containers/Register/Register";
import Login from "./src/Containers/Login/Login";
import OTP from "./src/Containers/OTP/OTP";
import Home from "./src/Containers/Home/Home";
import Search from "./src/Containers/Search/Search";
import Profile from "./src/Containers/Profile/Profile";
import NavBar from "./src/Components/NavBar/NavBar";
import { Colors } from "./src/Global/Colors";
import Cart from "./src/Containers/Cart/Cart";
import ExploreMap from "./src/Containers/ExploreMap/ExploreMap";
import OrderSampleDetail from "./src/Containers/OrderSampleDetail/OrderSampleDetail";
// import NavigationService from "./NavigationService";
import PriceChartTable from "./src/Containers/PriceChartTable/PriceChartTable";
import SearchVideo from "./src/Containers/SearchVideo/SearchVideo";
import ExploreProducts from "./src/Containers/ExploreProducts/ExploreProducts";

const RootStack = createSwitchNavigator({
  AuthStack: createStackNavigator(
    {
      landing: Landing,
      login: Login,
      register: Register,
      otp: OTP
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  ),
  UserStack: createBottomTabNavigator(
    {
      home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="home" color={tintColor} size={24} />
          )
        }
      },
      SearchStack: {
        screen: createStackNavigator(
          {
            search: Search,
            searchVideo: SearchVideo,
            priceChartTable: PriceChartTable
          },
          {
            defaultNavigationOptions: {
              header: null
            }
          }
        ),
        navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="FontAwesome"
              name="search"
              color={tintColor}
              size={24}
            />
          )
        }
      },
      ExploreStack: {
        screen: createStackNavigator(
          {
            exploreProducts: ExploreProducts,
            // exploreMap: ExploreMap,
            orderSampleDetail: OrderSampleDetail
          },
          {
            defaultNavigationOptions: {
              header: null
            }
          }
        ),
        navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="FontAwesome"
              name="comment"
              color={tintColor}
              size={24}
            />
          )
        }
      },
      cart: {
        screen: Cart,
        navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon type="FontAwesome" name="shop" color={tintColor} size={24} />
          )
        }
      },
      profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon
              type="FontAwesome"
              name="account-circle"
              color={tintColor}
              size={24}
            />
          )
        }
      }
    },
    {
      swipeEnabled: false,
      animationEnabled: false,
      allowFontScaling: false,
      tabBarComponent: NavBar,
      tabBarPosition: "bottom",
      tabBarOptions: {
        showIcon: true,
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.dark,
        style: {
          backgroundColor: Colors.bg
        },
        indicatorStyle: {
          opacity: 0
        }
      }
    }
  )
});

export const Application = createAppContainer(RootStack);
