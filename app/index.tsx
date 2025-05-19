import { Orientation } from "@/components/Orientation";
import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function IndexScreen() {
  const { orientation, orientationLock, platformOrientation } =
    useOrientationInfo();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Orientation
        orientation={orientation}
        orientationLock={orientationLock}
        platformOrientation={platformOrientation}
      />

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello, World!</Text>
      <Link href="/second">
        <Text style={{ fontSize: 18, color: "blue" }}>Go to Second Screen</Text>
      </Link>
    </View>
  );
}
