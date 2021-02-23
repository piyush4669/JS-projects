import React, {Component} from 'react';

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Fitsy Partner</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Username"
                  placeholderColor="#21184a"
                  style={styles.loginFormTextInput}
                />
                <TextInput
                  placeholder="Password"
                  placeholderColor="#21184a"
                  style={styles.loginFormTextInput}
                  secureTextEntry={true}
                />
                <Button
                  buttonStyle={styles.loginButton}
                  titleStyle={styles.title}
                  onPress={() => this.onLoginPress()}
                  title="Login"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    alert('HELLO!');
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 50,
    marginTop: 150,
    marginBottom: 30,
    color: '#1d0973',
    textAlign: 'center',
    fontFamily: 'Concert One',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 45,
    width: 300,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#21184a',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginTop: 50,
    marginLeft: 12,
    marginRight: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Lato Regular',
  },
  inputView: {
    marginTop:100,
  },
});
