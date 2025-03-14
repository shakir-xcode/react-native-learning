import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";

const generateList = () => {
  const listItems: number[] = [];
  let num = 125367;
  for (let i = 1; i < 100; i++) {
    listItems.push((num += 1));
  }

  return listItems;
};

const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

const flatListExample = () => {
  const emptyList: number[] = [];
  return (
    // <Container style={styles.container}>
    <Container>
      <FlatList
        data={generateList()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardItem}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.toString()}
        ListEmptyComponent={<Text>No Items Found...</Text>}
        ListHeaderComponent={
          <Text style={styles.textStyle}>A List of Numbers</Text>
        }
        ListFooterComponent={
          <Text style={styles.textStyle}>Here is the end of the list</Text>
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  cardItem: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 15,
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginVertical: 8,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textStyle: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: 24,
  },
});

export default flatListExample;
