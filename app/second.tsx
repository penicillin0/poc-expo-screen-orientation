import { Text, View } from "react-native";

export default function SecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
    </View>
  );
}
