import * as React from "react";
import { View } from "react-native";
import Color from "../../theme/Color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Button from "../../components/Button";
import Styles from "../../Style";

const ButtonScreen = ({ navigation }: any) => {
  return (
    <View
      style={Styles.container}
    >
      <Button
        buttonText={"Submit"}
        type={"default"}
        onPress={() => alert("submitted")}
      />
      <Button
        buttonText={"Submit"}
        type={'success'}
        leftIcon={'menu'}
        stickyIcon={true}
        shadow={true}
        onPress={() => alert("submitted")}
      />
    </View>
  );
};

export default ButtonScreen;
