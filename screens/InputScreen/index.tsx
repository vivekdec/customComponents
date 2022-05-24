import * as React from "react";
import { Button, Text, View } from "react-native";
import { Input } from "../../components/Input";
import Styles from "../../Style";

const InputScreen = ({ navigation }: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={Styles.container}
    >
      <View style={Styles.inputContainer}>
        <Text style={Styles.labelStyle}>Email:</Text>
        <Input
          leftIcon={"mail"}
          onChangeText={(txt: any) => setEmail(txt)}
          value={email}
          containerStyle={Styles.inputBorder}
        />
      </View>
      <View style={Styles.inputContainer}>
        <Text style={Styles.labelStyle}>Password:</Text>
        <Input
          secureTextEntry={true}
          onChangeText={(txt: any) => setPassword(txt)}
          value={password}
          containerStyle={Styles.inputBottomBorder}
          rightIcon
          localRightIcon={"eye"}
        />
      </View>

      <Button
        onPress={() => alert(JSON.stringify({ email, password }))}
        title={"submit"}
      />
    </View>
  );
};

export default InputScreen;
