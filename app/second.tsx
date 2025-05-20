import { Orientation } from "@/components/Orientation";
import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function SecondScreen() {
  const {
    orientation,
    orientationLock,
    platformOrientation,
    reloadOrientation,
  } = useOrientationInfo();

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
      <Orientation
        orientation={orientation}
        orientationLock={orientationLock}
        platformOrientation={platformOrientation}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello, Second Screen!
      </Text>
    </View>
  );
}
