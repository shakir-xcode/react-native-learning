import Box from "@/components/my_components/Box";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function RnLayout() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <View style={styles.sectionTop}>
          <Box style={{ backgroundColor: "#afabcc", flex: 1 }}>Box </Box>
        </View>

        <View style={styles.sectionHorizontal}>
          <Box style={{ backgroundColor: "#fa3012" }}>Box 1</Box>
          <Box style={{ backgroundColor: "#aa8012" }}>Box 2</Box>
          <Box style={{ backgroundColor: "#ba5612" }}>Box 3</Box>
        </View>

        <View style={styles.sectionOne}>
          <Box style={{ backgroundColor: "#19ea12" }}>Box 1</Box>
          <Box style={{ backgroundColor: "#aaea12" }}>Box 2</Box>
          <Box style={{ backgroundColor: "#89eaff" }}>Box 3</Box>
          <Box style={{ backgroundColor: "#11ea12" }}>Box 4</Box>
          <Box style={{ backgroundColor: "#89fa12" }}>Box 5</Box>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTop: {
    height: 200,
    borderWidth: 2,
    borderColor: "yellow",
  },
  sectionOne: {
    borderWidth: 2,
    borderColor: "blue",
  },
  sectionHorizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "purple",
  },
});
