import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Alert, Button, Text, View } from "react-native";

export default function SecondScreen() {
  const { orientation, orientationLock, platformOrientation } =
    useOrientationInfo();

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
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation: {orientation}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation Lock: {orientationLock}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Platform Orientation: {JSON.stringify(platformOrientation)}
      </Text>

      <Button
        title="lock"
        onPress={async () => {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          );

          Alert.alert(
            "Orientation Lock",
            "The screen orientation has been locked to portrait up."
          );
        }}
      />

      <Button
        title="unlock"
        onPress={async () => {
          await ScreenOrientation.unlockAsync();

          Alert.alert(
            "Orientation Unlock",
            "The screen orientation has been unlocked."
          );
        }}
      />
    </View>
  );
}
