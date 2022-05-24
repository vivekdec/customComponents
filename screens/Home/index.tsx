import * as React from "react";
import { Button, View } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={{flex: 1, padding: 15}}>
      <Button
        title="Go to Input component"
        onPress={() => navigation.navigate("InputScreen")}
      />
      <Button
        title="Go to Button component"
        onPress={() => navigation.navigate("ButtonScreen")}
      />
    </View>
  );
};

export default Home;
