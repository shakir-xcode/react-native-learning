import { View, Text, StyleSheet } from "react-native";
import React, { Children } from "react";

const Box = (props: { children: any; style: any }) => {
  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Box;
