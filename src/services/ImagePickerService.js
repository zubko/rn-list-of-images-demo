import * as ImagePicker from 'expo-image-picker';

import PermissionsService from './PermissionsService';

export async function pickImage() {
  const permitted = await PermissionsService.getCameraPermissionAsync();
  if (!permitted) {
    alert('Camera permission is required for this to work');
    return null;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  });
  if (!result || result.cancelled) {
    return null;
  }

  // console.warn(result);

  return {
    path: result.uri,
    width: result.width,
    height: result.height,
  };
}

export default { pickImage };
