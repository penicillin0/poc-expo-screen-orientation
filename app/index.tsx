import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import RNOrientationDirector, {
  Orientation,
} from "react-native-orientation-director";

export default function IndexScreen() {
  useEffect(() => {
    RNOrientationDirector.lockTo(Orientation.portrait);

    return () => {
      RNOrientationDirector.unlock();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      <Link href="/second">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Second Screen</Text>
      </Link>
    </View>
  );
}
