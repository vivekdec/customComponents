import React from "react";
import {Text, TouchableOpacity, View, TextStyle} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import FeatherIcon from "react-native-vector-icons/Feather";
import Color from "../../theme/Color";

interface Props {
    buttonText: string,
    type:'default'| 'secondary'| 'tertiary'| 'success'| 'danger'| 'warning'| 'info' | 'white',
    size?: 'default'| 'big' | 'medium' | 'small' | 'xSmall',
    leftIcon?: string,
    rightIcon?: string,
    stickyIcon?: boolean,
    filled?: boolean,
    shadow?: boolean,
    containerStyle?: any,
    onPress: () => void,
    textStyle?: any,
    iconStyle?: any,
    leftIconStyle?: any,
    rightIconStyle?: any
}

const Button = ({
        containerStyle,
        textStyle,
        leftIcon,
        iconStyle,
        leftIconStyle,
        rightIconStyle,
        rightIcon,
        filled= true,
        type= "default",
        size= "default",
        stickyIcon= false,
        shadow= false,
        buttonText= "",
        onPress
    }: Props) => {

    function getButtonStyle(type: any, size: any, filled:any) {

        const buttonColors: any = {
            default: Color.primary,
            secondary: Color.secondary,
            tertiary: Color.tertiary,
            success: Color.success,
            warning: Color.warning,
            danger: Color.danger,
            info: Color.info,
            white: Color.white
        };

        let style = {};
        switch (size) {
            case "big":
                style = {
                    button: {
                        height: hp("7%"),
                        backgroundColor: filled ? buttonColors[type] : "transparent",
                        borderColor: filled ? "transparent" : buttonColors[type],
                        borderWidth: filled ? 0 : 1
                    },
                    text: {
                        fontSize: hp(2),
                        color: filled ? "white" : buttonColors[type]
                    },
                    icon: {
                        fontSize: hp(2.5),
                        color: filled ? "white" : buttonColors[type]
                    },
                };
                break;
            case "medium":
                style = {
                    button: {
                        height: hp("5%"),
                        backgroundColor: filled ? buttonColors[type] : "transparent",
                        borderColor: filled ? "transparent" : buttonColors[type],
                        borderWidth: filled ? 0 : 1
                    },
                    text: {
                        fontSize: hp(1.8),
                        color: filled ? "white" : buttonColors[type]
                    },
                    icon: {
                        fontSize: hp(2.2),
                        color: filled ? "white" : buttonColors[type]
                    },
                };
                break;
            case "small":
                style={
                    button: {
                        height: hp("4.2%"),
                        backgroundColor: filled ? buttonColors[type] : "transparent",
                        borderColor: filled ? "transparent" : buttonColors[type],
                        borderWidth: filled ? 0 : 1,
                    },
                    text: {
                        fontSize: hp("1.5%"),
                        color: filled ? "white" : buttonColors[type]
                    },
                    icon: {
                        fontSize: hp(1.9),
                        color: filled ? "white" : buttonColors[type]
                    },
                };
                break;
            case "xSmall":
                style = {
                    button: {
                        height: hp("3.5%"),
                        backgroundColor: filled ? buttonColors[type] : "transparent",
                        borderColor: filled ? "transparent" : buttonColors[type],
                        borderWidth: filled ? 0 : 1
                    },
                    text: {
                        fontSize: hp("1.3%"),
                        color: filled ?  "white" : buttonColors[type],
                    },
                    icon: {
                        fontSize: hp(1.6),
                        color: filled ? "white" :  buttonColors[type],
                    },
                };
                break;
            default:
                style = {
                    button: {
                        height: hp("5%"),
                        backgroundColor: filled ? buttonColors[type] : "transparent",
                        borderColor: filled ? "transparent" : buttonColors[type],
                        borderWidth: filled ? 0 : 1
                    },
                    text: {
                        fontSize: hp(1.8),
                        color: filled ? "white" : buttonColors[type]
                    },
                    icon: {
                        fontSize: hp(2.2),
                        color: filled ? "white" : buttonColors[type]
                    },
                };
                break;
        }

        return style;
    }

    let style: any = getButtonStyle(type, size, filled);

    return (
      <TouchableOpacity
        onPress={onPress}
          style={[
              {
                flexDirection: "row",
                margin: 10,
                width: "100%",
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: "center",
                borderRadius: 5,
                paddingHorizontal: 15,
                ...style["button"],
                ...containerStyle,
              }
          ]}>
          {leftIcon &&
            <View
                style={{
                  flex: stickyIcon ? 0 : 1,
                  right: stickyIcon ? 10 : 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <FeatherIcon
                    style={{
                      ...style["icon"],
                      ...iconStyle,
                      ...leftIconStyle
                    }}
                    name={leftIcon}/>
            </View>
          }
          {!leftIcon &&
            <View style={{flex: stickyIcon ? 0 : 1}}/>
          }
          <View
            style={{flex: stickyIcon ? 0 : 8}}>
            <Text
              style={{
                fontWeight: "600",
                textAlign: "center",
                ...style["text"],
                ...textStyle
              }}>
                {buttonText}
            </Text>
          </View>
          {rightIcon &&
            <View
                style={{
                  flex: stickyIcon ? 0 : 1,
                  left: stickyIcon ? 10 : 0,
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <FeatherIcon
                    style={{
                      ...style["icon"],
                      ...iconStyle,
                      ...rightIconStyle
                    }}
                    name={rightIcon}/>
            </View>
          }
          {!rightIcon &&
            <View style={{flex: stickyIcon ? 0 : 1}}/>
          }
      </TouchableOpacity>
    )
};

export default Button;
