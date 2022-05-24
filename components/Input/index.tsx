import React, { useContext, useState } from "react";
import {
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Color from "../../theme/Color";

export const Input = (props: any) => {
  // to define props values
  let {
    leftIcon,
    rightIcon,
    iconColor,
    containerStyle,
    textInputStyle,
    keyboardType,
    rightIconOnPress,
    textArea = false,
    placeholder = "",
    multiline = false,
    numberOfLines = 1,
    editable = true,
    value = "",
    placeholderTextColor = "#707070",
    secureTextEntry = false,
  } = props;

  // to store 'secureTextEntry' value that comes from props, for changing input area visibility
  const [togglePassword, passwordVisible] = useState(secureTextEntry);
  // to change right icon if the input is secure text entry
  const [localRightIcon, setRightIcon] = useState(
    secureTextEntry ? "eye" : rightIcon
  );

  return (
    <View
      style={{
        flexDirection: "row",
        height: textArea ? hp(10) : hp(5.5),
        alignSelf: "center",
        backgroundColor: "transparent",
        borderStyle: "solid",
        width: "100%",
        ...containerStyle,
      }}
    >
      {leftIcon && (
        <View
          style={{
            flex: 3,
            alignSelf: "center",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FeatherIcon
            name={leftIcon}
            style={{
              textAlign: "center",
              fontSize: hp(2.5),
              color: iconColor || Color.primary,
            }}
          />
        </View>
      )}

      <TextInput
        {...props}
        secureTextEntry={togglePassword}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || Color.gray}
        style={{
          flex: rightIcon ? 14 : 17,
          padding: 10,
          fontSize: hp(1.8),
          fontWeight: "500",
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "left",
          color: Color.primary,
          ...textInputStyle,
        }}
      />

      {rightIcon && (
        <TouchableOpacity
          disabled={!secureTextEntry}
          onPress={() => {
            if (secureTextEntry) {
              passwordVisible(!togglePassword);
              setRightIcon(togglePassword ? "eye-off" : "eye");
            } else {
              if (typeof rightIconOnPress === "function") {
                rightIconOnPress();
              }
            }
          }}
          style={{
            flex: 3,
            alignSelf: "center",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FeatherIcon
            name={localRightIcon}
            style={{
              textAlign: "center",
              fontSize: hp(2.5),
              color: iconColor || Color.primary,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
