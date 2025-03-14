import { View, Text } from "react-native";
import React from "react";

const Greet = (props: { name: string }) => {
  return (
    <View>
      <Text>Hello {props.name}</Text>
      <Text>this is a custom component </Text>
    </View>
  );
};

export default Greet;
