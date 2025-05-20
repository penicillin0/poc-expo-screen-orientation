import { Link } from "expo-router";
import { Text, View } from "react-native";
import { OrientationLocker, PORTRAIT } from "react-native-orientation-locker";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OrientationLocker orientation={PORTRAIT} />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      <Link href="/second">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Second Screen</Text>
      </Link>
    </View>
  );
}
