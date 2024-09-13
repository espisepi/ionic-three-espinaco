import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";

export function usePhotoGallery() {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  return {
    takePhoto,
  };
}

/*

Notice the magic here: there's no platform-specific code (web, iOS, or Android)!
The Capacitor Camera plugin ( import { Camera } from '@capacitor/camera' ) abstracts that away for us, leaving just one method call - getPhoto() -
that will open up the device's camera and allow us to take photos.

*/
