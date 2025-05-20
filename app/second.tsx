import { useEffect } from "react";
import { Text, View } from "react-native";
import RNOrientationDirector, {
  Orientation,
} from "react-native-orientation-director";

export default function SecondScreen() {
  useEffect(() => {
    RNOrientationDirector.lockTo(Orientation.landscapeRight);

    return () => {
      RNOrientationDirector.unlock();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
    </View>
  );
}
