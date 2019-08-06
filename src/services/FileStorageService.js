import { FileSystem } from 'react-native-unimodules';

export async function checkMoveFileToDocuments(source, subFolder) {
  try {
    const destDir = FileSystem.documentDirectory + subFolder + '/';
    const fileName = source.substr(source.lastIndexOf('/') + 1);
    const destination = destDir + fileName;
    if (source === destination) {
      return destination;
    }
    const { exists: dirExists } = await FileSystem.getInfoAsync(destDir);
    if (!dirExists) {
      await FileSystem.makeDirectoryAsync(destDir, { intermediates: true });
    }
    await FileSystem.moveAsync({
      from: source,
      to: destination,
    });
    return destination;
  } catch (error) {
    console.warn('checkMoveFileToDocuments:', error);
    return null;
  }
}

export function getRelativePathInDocuments(absolutePath) {
  const docPath = FileSystem.documentDirectory;
  if (__DEV__) {
    if (absolutePath.indexOf(docPath) !== 0) {
      throw Error(`${absolutePath} isn't pointing to Documents`);
    }
  }
  return absolutePath.substr(docPath.length);
}

export function getAbsolutePathInDocuments(relativePath) {
  const docPath = FileSystem.documentDirectory;
  return docPath + '/' + relativePath;
}

export default {
  checkMoveFileToDocuments,
  getAbsolutePathInDocuments,
  getRelativePathInDocuments,
};
