import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown-deprecated-support";
import { Icon } from "react-native-elements";

import { Colors } from "../../Global/Colors";
import { PoppinsSemiBold } from "../Text/Text";
const { width } = Dimensions.get("window");

export const FormField = props => (
  <View
    style={{
      width: width - 80,
      marginHorizontal: props.marginHorizontal || 40
    }}
  >
    {props.label && (
      <Text style={{ fontFamily: "Poppins-Regular", color: Colors.dark }}>
        {props.label}
      </Text>
    )}
    <TextInput
      style={{
        fontFamily: "Poppins-Regular",
        height: 40,
        width: "100%",
        borderColor: "rgba(112, 112, 112, 0.34)",
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 7,
        marginBottom: 15,
        paddingLeft: 15,
        color: Colors.darkGray,
        padding: 0
      }}
      placeholder={props.placeholder}
    />
  </View>
);

export const DropdownField = props => (
  <View style={{ width: width - 80, marginHorizontal: 40 }}>
    {props.label && (
      <Text style={{ fontFamily: "Poppins-Regular", color: Colors.dark }}>
        {props.label}
      </Text>
    )}
    <View>
      <View
        style={{
          position: "absolute",
          height: 40,
          width: "100%",
          marginTop: 7,
          marginBottom: 15,
          justifyContent: "center",
          alignItems: "flex-end"
        }}
      >
        <Icon
          name="arrow-drop-down"
          type="material"
          color={Colors.dark}
          size={40}
          onPress={props.onPress}
        />
      </View>
      <ModalDropdown
        defaultIndex={
          typeof props.defaultIndex === typeof 1 ? props.defaultIndex : -1
        }
        defaultValue={
          (typeof props.defaultIndex === typeof 1 &&
            props.options[props.defaultIndex]) ||
          props.placeholder ||
          "Please Select..."
        }
        options={props.options}
        style={{
          height: 40,
          width: "100%",
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 1,
          borderRadius: 4,
          marginTop: 7,
          marginBottom: 15,
          paddingLeft: 15,
          justifyContent: "center"
        }}
        textStyle={{
          fontFamily: "Poppins-Regular",
          color: Colors.darkGray,
          textTransform: "uppercase",
          fontSize: 16
        }}
        dropdownStyle={{
          width: width - 82,
          height: "auto",
          marginTop: 10,
          marginLeft: -15,
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 1,
          borderRadius: 4,
          paddingVertical: 5
        }}
        dropdownTextStyle={{
          color: Colors.darkGray,
          textTransform: "uppercase",
          paddingLeft: 15,
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          paddingVertical: 6
        }}
        dropdownTextHighlightStyle={{
          backgroundColor: Colors.skyBlue,
          color: Colors.darkGray
        }}
        renderSeparator={() => {}}
      />
    </View>
  </View>
);

export const DropdownFieldDark = props => (
  <View
    style={{
      width: props.width || width - 80,
      marginHorizontal:20
    }}
  >
    {props.label && (
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: Colors.dark,
          fontSize: props.fontSize
        }}
      >
        {props.label}
      </Text>
    )}
    <View>
      <View
        style={{
          position: "absolute",
          height: props.height || 40,
          width: "100%",
          marginTop: props.noMarginT || props.marginT || 7,
          marginBottom: props.noMarginB || props.marginB || 15,
          justifyContent: "center",
          alignItems: "flex-end",
          height: props.height || 40,
          backgroundColor: "#f5f5f5",
          borderRadius: 4
        }}
      >
        <Icon
          name="arrow-drop-down"
          type="material"
          color={Colors.dark}
          size={props.height || 40}
          onPress={props.onPress}
        />
      </View>
      <ModalDropdown
        defaultIndex={
          typeof props.defaultIndex === typeof 1 ? props.defaultIndex : -1
        }
        defaultValue={
          (typeof props.defaultIndex === typeof 1 &&
            props.options[props.defaultIndex]) ||
          props.placeholder ||
          "Please Select..."
        }
        options={props.options}
        style={{
          height: props.height || 40,
          width: "100%",
          backgroundColor: "transparent",
          borderRadius: 4,
          marginTop: 7,
          marginBottom: 15,
          paddingLeft: (props.height || 40 * 15) / 40,
          justifyContent: "center"
        }}
        textStyle={{
          fontFamily: "Poppins-Regular",
          color: Colors.dark,
          fontSize: props.fontSize || 16,
          textTransform: "capitalize"
        }}
        dropdownStyle={{
          width: props.width || width - 82,
          height: "auto",
          marginTop: 10,
          marginLeft: -15,
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 1,
          borderRadius: 4,
          paddingVertical: 5
        }}
        dropdownTextStyle={{
          color: Colors.darkGray,
          textTransform: "uppercase",
          paddingLeft: 15,
          fontFamily: "Poppins-Regular",
          fontSize: props.fontSize - 2 || 14,
          paddingVertical: 6
        }}
        dropdownTextHighlightStyle={{
          backgroundColor: Colors.skyBlue,
          color: Colors.darkGray
        }}
        renderSeparator={() => {}}
      />
    </View>
  </View>
);

export const CustomDropdownField = props => (
  <TouchableOpacity style={{ width: props.width || "auto" }}>
    {props.label && (
      <Text style={{ fontFamily: "Poppins-Regular", color: Colors.dark }}>
        {props.label}
      </Text>
    )}
    <View>
      <View
        style={{
          position: "absolute",
          height: 18,
          width: "100%",
          justifyContent: "center",
          alignItems: "flex-end"
        }}
      >
        <Icon
          name="keyboard-arrow-down"
          type="material"
          color={Colors.blue}
          size={17}
          onPress={props.onPress}
        />
      </View>
      <ModalDropdown
        defaultIndex={
          typeof props.defaultIndex === typeof 1 ? props.defaultIndex : -1
        }
        defaultValue={
          (typeof props.defaultIndex === typeof 1 &&
            props.options[props.defaultIndex]) ||
          props.placeholder ||
          "Please Select..."
        }
        options={props.options}
        style={{
          height: 17,
          width: "100%",
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 0.5,
          borderRadius: 17,
          paddingLeft: 8.5,
          paddingRight: 20,
          justifyContent: "center"
        }}
        textStyle={{
          fontFamily: "Poppins-Regular",
          color: Colors.dark,
          textTransform: "uppercase",
          fontSize: 10,
          lineHeight: 17
        }}
        dropdownStyle={{
          width: "auto",
          height: "auto",
          minWidth: props.width || 75,
          marginTop: 3,
          marginRight: -20,
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 0.5,
          borderRadius: 4,
          paddingVertical: 5
        }}
        dropdownTextStyle={{
          fontFamily: "Poppins-Regular",
          color: Colors.darkGray,
          textTransform: "uppercase",
          fontSize: 10,
          lineHeight: 17,
          paddingVertical: 0
        }}
        dropdownTextHighlightStyle={{
          backgroundColor: Colors.skyBlue,
          color: Colors.darkGray
        }}
        renderSeparator={() => {}}
      />
    </View>
  </TouchableOpacity>
);

export class CustomCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    if (this.props.initialCount)
      this.setState({ count: this.props.initialCount });
  }

  Add = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.props.onChange) this.props.onChange();
  };

  Remove = () => {
    this.setState({ count: this.state.count - 1 });
    if (this.props.onChange) this.props.onChange();
  };

  render() {
    return (
      <View
        style={{
          height: this.props.height || 18,
          width: this.props.width || 60,
          borderColor: "rgba(112, 112, 112, 0.34)",
          borderWidth: 0.5,
          borderRadius: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        {this.state.count ? (
          <React.Fragment>
            <TouchableOpacity style={{ paddingLeft: 3 }}>
              <Icon
                name="remove"
                type="material"
                color={Colors.blue}
                size={15}
                onPress={this.Remove}
              />
            </TouchableOpacity>
            <PoppinsSemiBold size={10} color={Colors.blue}>
              {this.state.count}
            </PoppinsSemiBold>
            <TouchableOpacity style={{ paddingRight: 3 }}>
              <Icon
                name="add"
                type="material"
                color={Colors.blue}
                size={15}
                onPress={this.Add}
              />
            </TouchableOpacity>
          </React.Fragment>
        ) : (
          <TouchableOpacity
            style={{
              paddingRight: 3,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%"
            }}
            onPress={this.Add}
          >
            <Icon
              name="add"
              type="material"
              color={Colors.blue}
              size={14}
              onPress={this.props.onAdd}
            />
            <PoppinsSemiBold size={10} lineHeight={14} color={Colors.blue}>
              ADD
            </PoppinsSemiBold>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
