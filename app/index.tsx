import { Link } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function IndexScreen() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
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
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      <Link href="/second">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Second Screen</Text>
      </Link>
    </View>
  );
}
