import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function IndexScreen() {
  useOrientationInfo();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      <Link href="/second">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Second Screen</Text>
      </Link>
    </View>
  );
}
