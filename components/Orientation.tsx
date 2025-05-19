import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import { Text } from "react-native";



export const Orientation = ({
  orientation,
  orientationLock,
  platformOrientation,
}: ReturnType<typeof useOrientationInfo>) => {
  return (
    <>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation: {orientation}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation Lock: {orientationLock}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Platform Orientation: {JSON.stringify(platformOrientation)}
      </Text>
    </>
  );
};
