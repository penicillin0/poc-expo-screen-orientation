import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export const useOrientationInfo = () => {
  const [orientation, setOrientation] =
    useState<ScreenOrientation.Orientation | null>(null);
  const [orientationLock, setOrientationLock] =
    useState<ScreenOrientation.OrientationLock | null>(null);
  const [platformOrientation, setPlatformOrientation] =
    useState<ScreenOrientation.PlatformOrientationInfo | null>(null);

  const reloadOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    const orientationLock = await ScreenOrientation.getOrientationLockAsync();
    const platformOrientation =
      await ScreenOrientation.getPlatformOrientationLockAsync();
    setOrientation(orientation);
    setOrientationLock(orientationLock);
    setPlatformOrientation(platformOrientation);
  };

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

      setOrientation(orientation);
      setOrientationLock(orientationLock);
      setPlatformOrientation(platformOrientation);
    })();

    ScreenOrientation.addOrientationChangeListener((event) => {
      setOrientation(event.orientationInfo.orientation);
      setOrientationLock(event.orientationLock);
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);

  return {
    orientation,
    orientationLock,
    platformOrientation,
    reloadOrientation,
  };
};
