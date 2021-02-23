/**
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from './Screens/LoginScreen';
// import Boiler from "./app/components/Boiler";
// import ForgetPassword from "./app/components/ForgetPassword";
// import Register from "./app/components/Register";

import {StackNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

class AuthLoading extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#c4c3cb',
      elevation: null,
    },
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
      {/* <LinearGradient colors={['#a8c0fd', '#7374c8', '#3f2b96']} locations={[0.4, 0.6, 0.9]} style={styles.linearGradient}>*/}
        <StatusBar barStyle="light-content" backgroundColor="#21184a" />
        <LoginScreen navigation={this.props.navigation} />
      {/* </LinearGradient> */}
      </View>

    );
  }
}

const AppNavigator = createStackNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
      navigationOptions: {
        title: 'AuthLoading',
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => {
        return {
          headerLeft: (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: '#fff', marginLeft: 10, fontSize: 16}}>
                Login
              </Text>
            </View>
          ),
          headerStyle: {backgroundColor: '#c4c3cb'},
        };
      },
    },
    // Register: {
    //   screen: Register,
    //   navigationOptions: {
    //     title: "Register"
    //   }
    // },
    // ForgetPassword: {
    //   screen: ForgetPassword,
    //   navigationOptions: {
    //     title: "ForgetPassword"
    //   }
    // },
    // Boiler: {
    //   screen: Boiler,
    //   navigationOptions: {
    //     title: "Boiler"
    //   }
    // }
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    paddingTop: 50
  },
  container: {
    flex: 1,
  },
});
