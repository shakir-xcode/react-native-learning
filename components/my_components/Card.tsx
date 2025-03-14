import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { Platform } from "react-native";

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

const Card = (props: Pokemon) => {
  return (
    <View style={styles.container}>
      <View style={styles.row_1}>
        <Text style={[styles.boldText, styles.nameStyle]}>{props.name}</Text>
        <Text style={{ fontSize: 17, fontWeight: 400 }}>💖HP : {props.hp}</Text>
      </View>

      <View style={styles.row_2}>
        <Image
          source={props.image}
          accessibilityLabel={props.name}
          style={styles.pokeImage}
          resizeMode="contain"
        />
      </View>

      <View style={{ alignItems: "center", marginTop: 10 }}>
        <View style={[styles.badge, { borderColor: props.type.borderColor }]}>
          <Text>{props.type.emoji}</Text>
          <Text style={[styles.boldText]}>{props.type.title}</Text>
        </View>
      </View>

      <View style={styles.row_4}>
        <Text style={styles.boldText}></Text>
        <Text style={styles.boldText}>Moves: {props.moves}</Text>
      </View>

      <View style={styles.row_5}>
        <Text style={styles.boldText}></Text>
        <Text style={styles.boldText}>Weakness: {props.weakness}</Text>
      </View>
    </View>
  );
};

const styles: any = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    gap: 16,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  nameStyle: {
    fontSize: 20,
  },

  pokeImage: {
    width: "100%",
    height: 200,
  },
  row_1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  row_2: {
    justifyContent: "center",
    alignItems: "center",
  },

  row_3: {
    justifyContent: "center",
    alignItems: "center",
  },

  row_4: {
    flexDirection: "row",
    gap: 4,
  },

  row_5: {
    flexDirection: "row",
    gap: 4,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 4,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
});
export default Card;
