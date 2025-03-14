import { View, Text, SectionList } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
];

const MySectionList = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View>
          <Text>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
    />
  );
};

export default MySectionList;
