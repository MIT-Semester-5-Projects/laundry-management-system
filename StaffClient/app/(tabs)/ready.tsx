import { Text, View, StyleSheet } from "react-native";

export default function ReadyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ready screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
});
