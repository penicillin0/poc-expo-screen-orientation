import { Text, View } from "react-native";
import { LANDSCAPE, OrientationLocker } from "react-native-orientation-locker";

export default function SecondScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OrientationLocker orientation={LANDSCAPE} />
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
    </View>
  );
}
