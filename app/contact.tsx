import { ColorSchemeName, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
const logo = require("@/assets/images/7.jpg");

const contact = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles({
    text: theme.text,
    background: theme.background,
    mode: colorScheme,
  });

  const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript" size={250} color={imgColor} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>My Contact</Text>

        <View>
          <Text style={styles.text}>555 Coffee Lane</Text>
          <Text style={styles.text}>Kansas City, Ks 55555-1234</Text>
        </View>

        <View>
          <Text style={styles.text}>Phone:</Text>
          <Link href="tel:555-555-1234" style={styles.text}>
            555-555-1234
          </Link>
          <Text style={styles.text}>
            or{" "}
            <Link href="sms:555-555-1234" style={styles.underlined}>
              click here to Text
            </Link>
          </Text>
        </View>

        <View>
          <Text style={styles.text}>Hours:</Text>
          <Text style={styles.text}>Open 6am to 4pm daily</Text>
        </View>
      </View>
    </View>
  );
};

export default contact;

function createStyles(theme: {
  text: string;
  background: string;
  mode: ColorSchemeName;
}) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    contentContainer: {
      padding: 9,
      flexDirection: "column",
      gap: 12,
    },
    imgContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.mode === "dark" ? "#333" : "#e0e0e0",
      padding: 20,
    },
    image: {
      width: "80%",
      height: 250,
    },

    title: {
      fontWeight: 700,
      fontSize: 22,
      color: theme.text,
    },
    text: {
      fontSize: 18,
      fontWeight: 400,
      color: theme.text,
    },
    underlined: {
      textDecorationLine: "underline",
    },
  });
}
