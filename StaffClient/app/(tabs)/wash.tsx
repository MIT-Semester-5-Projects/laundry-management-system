import { Text, View, StyleSheet } from "react-native";

export default function WashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wash screen</Text>
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
