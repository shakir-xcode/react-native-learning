import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import Card from "@/components/my_components/Card";

const image = require("@/assets/images/7.jpg");

interface Pokemon {
  id: number;
  name: string;
  hp: number;
  image: any;
  type: PokemonType;
  moves: string;
  weakness: string;
}

interface PokemonType {
  title: string;
  borderColor: string;
  emoji: string;
}

const cardDescriptions: Pokemon[] = [
  {
    id: 1,
    name: "Pikachu",
    hp: Math.floor(Math.random() * 40 + 10),
    image: image,
    moves: "move_1, move_2, move_3",
    weakness: "weakness_1, weakness_2, weakness_3",
    type: {
      title: "electric",
      borderColor: "#FFD700",
      emoji: "⚡",
    },
  },
  {
    id: 2,
    name: "Squirtle",
    hp: Math.floor(Math.random() * 40 + 10),
    image: image,
    moves: "move_1, move_2, move_3",
    weakness: "weakness_1, weakness_2, weakness_3",
    type: {
      title: "water",
      borderColor: "#6493EA",
      emoji: "💧",
    },
  },
  {
    id: 3,
    name: "Charmander",
    hp: Math.floor(Math.random() * 40 + 10),
    image: image,
    moves: "move_1, move_2, move_3",
    weakness: "weakness_1, weakness_2, weakness_3",
    type: {
      title: "fire",
      borderColor: "#FF5733",
      emoji: "🔥",
    },
  },
  {
    id: 4,
    name: "Bulbasaur",
    hp: Math.floor(Math.random() * 40 + 10),
    image: image,
    moves: "move_1, move_2, move_3",
    weakness: "weakness_1, weakness_2, weakness_3",
    type: {
      title: "grass",
      borderColor: "#66CC66",
      emoji: "🦗",
    },
  },
];

const cards = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardsContainer}>
        {cardDescriptions.map((cardItem) => (
          <Card key={cardItem.id} {...cardItem} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    paddingTop: Platform.OS === "android" ? 70 : 0,
  },
  cardsContainer: {
    alignItems: "center",
    gap: 40,
    flexDirection: "column",
  },
});
export default cards;
