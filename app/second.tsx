import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function SecondScreen() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    })();

    return () => {
      (async () => {
        await ScreenOrientation.unlockAsync();
      })();
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
