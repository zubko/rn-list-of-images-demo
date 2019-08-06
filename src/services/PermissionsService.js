import { Permissions, Constants } from 'react-native-unimodules';

export const getCameraPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      return false;
    }
  }
  return true;
};

export default { getCameraPermissionAsync };
