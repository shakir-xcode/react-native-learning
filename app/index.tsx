import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Modal,
  Pressable,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Greet from "@/components/my_components/Greet";
import { Link } from "expo-router";
const testImg = require("@/assets/images/test-img.jpg");

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <ScrollView>
      <StatusBar
        backgroundColor="red"
        barStyle="light-content"
        hidden={isStatusBarVisible}
      />

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 20,
            padding: 10,
          }}
        >
          <Link style={styles.link} href="/">
            Home
          </Link>
          <Link style={styles.link} href="/cards">
            Cards
          </Link>
          <Link style={styles.link} href="/rnLayout">
            Layout
          </Link>
          <Link style={styles.link} href="/flatListExample">
            List
          </Link>
          <Link style={styles.link} href="/contact">
            Contact
          </Link>
        </View>

        <View>
          <Text style={styles.text}>
            <Text style={styles.greenText}>Hello</Text>World
          </Text>
        </View>

        <View style={styles.imageBg}>
          <ImageBackground source={testImg}>
            <Text
              style={{
                height: 200,
                textAlign: "center",
                verticalAlign: "middle",
                fontSize: 20,
                fontWeight: "semibold",
              }}
            >
              Overlay Text
            </Text>
          </ImageBackground>
        </View>

        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde iusto
            nesciunt pariatur maxime sunt earum doloribus ipsam ut molestias,
            aut tenetur odio, itaque alias hic. Illum accusantium odit earum
            culpa! ipsum dolor sit amet, consectetur adipisicing elit. Unde
            iusto nesciunt pariatur maxime sunt earum doloribus ipsam ut
            molestias, aut tenetur odio, itaque alias hic. Illum accusantium
            odit earum culpa! ipsum dolor sit amet, consectetur adipisicing
            elit. Unde iusto nesciunt pariatur maxime sunt earum doloribus ipsam
            ut molestias, aut tenetur odio, itaque alias hic. Illum accusantium
            odit earum culpa! ipsum dolor sit amet, consectetur adipisicing
            elit. Unde iusto nesciunt pariatur maxime sunt earum doloribus ipsam
            ut molestias, aut tenetur odio, itaque alias hic. Illum accusantium
            odit earum culpa!
          </Text>
        </View>

        <Button
          title="Click Me"
          onPress={() => {
            setIsModalVisible(true);
          }}
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
          }}
          animationType="slide"
        >
          <View style={{ padding: 60 }}>
            <Text style={{ fontSize: 36, fontWeight: "bold" }}>
              Modal Content
            </Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setIsModalVisible(false);
              }}
            />
          </View>
        </Modal>

        <Pressable
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          <Text
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: 20,
              fontWeight: "semibold",
              marginBottom: 20,
            }}
          >
            This is Pressable text component
          </Text>
        </Pressable>

        <Button
          title="Toggle Status Bar Visibility"
          onPress={() => {
            setIsStatusBarVisible((pre) => !pre);
          }}
        />

        <Text>Below is an activity indicator</Text>
        <ActivityIndicator animating={false} />
        <ActivityIndicator size="large" animating={false} />
        <ActivityIndicator size="large" color="red" animating={true} />

        <Button
          title="Alert 1"
          onPress={() => {
            Alert.alert("Some message");
          }}
        />
        <Button
          title="Alert 2"
          onPress={() => {
            Alert.alert("Title", "some message");
          }}
        />
        <Button
          title="Alert 3"
          onPress={() => {
            Alert.alert("Title", "some message", [
              {
                text: "cancel",
                onPress: () => console.log("cancel pressed"),
              },
              {
                text: "ok",
                onPress: () => console.log("ok pressed"),
              },
              {
                text: "third",
                onPress: () => console.log("third pressed"),
              },
            ]);
          }}
        />

        <Greet name="john doe" />

        {/* <MySectionList /> */}
        <View>
          <View style={[styles.boxShadow, styles.androidShadow]}>
            <Text style={styles.text}>Box Shadow</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "orange",
    paddingTop: 60,
    gap: 20,
    paddingBottom: 40,
  },
  text: {
    fontSize: 38,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  greenText: {
    color: "green",
  },
  imageBg: {
    marginTop: 15,
    marginBottom: 15,
  },

  boxShadow: {
    width: "80%",
    height: 80,
    marginHorizontal: "auto",
    padding: 20,
    shadowColor: "rgb(100, 255, 0)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  androidShadow: {
    elevation: 10,
  },
  link: {
    fontWeight: 600,
    fontSize: 20,
  },
});

export default App;
