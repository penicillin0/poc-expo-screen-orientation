import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export const useOrientationInfo = () => {
  useEffect(() => {
    (async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();
      const orientationLock = await ScreenOrientation.getOrientationLockAsync();
      const platformOrientation =
        await ScreenOrientation.getPlatformOrientationLockAsync();

      console.log({
        orientation,
        orientationLock,
        platformOrientation,
      });
    })();

    ScreenOrientation.addOrientationChangeListener((event) => {
      console.log("Orientation changed:", event);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);
};
