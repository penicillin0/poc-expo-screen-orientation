import { useOrientationInfo } from "@/hooks/useOrientationInfo";
import * as ScreenOrientation from "expo-screen-orientation";
import { Text } from "react-native";

const OrientationNameMap: Record<ScreenOrientation.Orientation, string> = {
  [ScreenOrientation.Orientation.UNKNOWN]: "Unknown",
  [ScreenOrientation.Orientation.PORTRAIT_UP]: "Portrait Up",
  [ScreenOrientation.Orientation.PORTRAIT_DOWN]: "Portrait Down",
  [ScreenOrientation.Orientation.LANDSCAPE_LEFT]: "Landscape Left",
  [ScreenOrientation.Orientation.LANDSCAPE_RIGHT]: "Landscape Right",
};

const OrientationLockNameMap: Record<
  ScreenOrientation.OrientationLock,
  string
> = {
  [ScreenOrientation.OrientationLock.DEFAULT]: "Default",
  [ScreenOrientation.OrientationLock.ALL]: "All",
  [ScreenOrientation.OrientationLock.PORTRAIT]: "Portrait",
  [ScreenOrientation.OrientationLock.PORTRAIT_UP]: "Portrait Up",
  [ScreenOrientation.OrientationLock.PORTRAIT_DOWN]: "Portrait Down",
  [ScreenOrientation.OrientationLock.LANDSCAPE]: "Landscape",
  [ScreenOrientation.OrientationLock.LANDSCAPE_LEFT]: "Landscape Left",
  [ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT]: "Landscape Right",
  [ScreenOrientation.OrientationLock.OTHER]: "Other",
  [ScreenOrientation.OrientationLock.UNKNOWN]: "Unknown",
};

export const Orientation = ({
  orientation,
  orientationLock,
  platformOrientation,
}: Omit<ReturnType<typeof useOrientationInfo>, "reloadOrientation">) => {
  return (
    <>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation: {orientation && OrientationNameMap[orientation]}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Orientation Lock:
        {orientationLock && OrientationLockNameMap[orientationLock]}
      </Text>
      <Text style={{ fontSize: 18, color: "blue" }}>
        Platform Orientation:
        {JSON.stringify(
          platformOrientation?.screenOrientationArrayIOS?.map(
            (item) => OrientationNameMap[item]
          )
        )}
      </Text>
    </>
  );
};
