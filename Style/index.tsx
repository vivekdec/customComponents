import { Platform, StyleSheet } from "react-native";
import { Color } from "../theme";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Styles = {
  center_container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 15,
  },

  // input style for our whole project
  inputContainer: {
    marginVertical: 10,
  },
  inputBorder: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.gray,
    borderRadius: 5,
  },
  inputBottomBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Color.gray,
  },
  labelStyle: {
    fontSize: hp("2%"),
    color: Color.cyanBlue
  }
};

export default Styles;
