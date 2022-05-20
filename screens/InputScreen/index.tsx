import * as React from "react";
import { Button, Text, View } from "react-native";
import { Input } from "../../components/Input";
import Color from "../../theme/Color";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const InputScreen = ({ navigation }: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        width: wp("100%"),
        flex: 1,
        padding: 15,
        backgroundColor: Color.white,
      }}
    >
      <Text style={{fontSize: hp('2%')}}>Email:</Text>
      <Input
        leftIcon={"mail"}
        onChangeText={(txt: any) => setEmail(txt)}
        value={email}
      />
      <Text style={{fontSize: hp('2%')}}>Password:</Text>
      <Input
        secureTextEntry={true}
        onChangeText={(txt: any) => setPassword(txt)}
        value={password}
        rightIcon
        localRightIcon={"eye"}
      />
      <Button
        onPress={() => alert(JSON.stringify({ email, password }))}
        title={"submit"}
      />
    </View>
  );
};

export default InputScreen;
