import { Link } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Alert, Text, View } from "react-native";

export default function SecondScreen() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      Alert.alert(
        "SecondScreen: Orientation Locked",
        "The screen orientation has been locked to LANDSCAPE_RIGHT.",
        [{ text: "OK" }]
      );
    })();

    return () => {
      (async () => {
        await ScreenOrientation.unlockAsync();
        console.log("SecondScreen: Orientation unlocked");
      })();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
      <Link href="/">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to First Screen</Text>
      </Link>
    </View>
  );
}
