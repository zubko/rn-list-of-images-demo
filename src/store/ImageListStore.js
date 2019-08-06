import { observable } from 'mobx';

import KeyValueStorageService from '../services/KeyValueStorageService';
import FileStorageService from '../services/FileStorageService';
import StorageConstants from '../constants/StorageConstants';

let data = null;

export async function init() {
  const storage = await KeyValueStorageService.get(
    StorageConstants.PHOTOS_STORAGE_KEY
  );
  data = observable.array((storage || []).map(deserializeItem));
  return true;
}

function serializeItem(item) {
  return {
    ...item,
    path: FileStorageService.getRelativePathInDocuments(item.path),
  };
}

function deserializeItem(item) {
  return {
    ...item,
    path: FileStorageService.getAbsolutePathInDocuments(item.path),
  };
}

function saveData() {
  KeyValueStorageService.set(
    StorageConstants.PHOTOS_STORAGE_KEY,
    data.map(serializeItem)
  );
}

export function getObservableImageList() {
  return data;
}

export async function addImage({ path, width, height }) {
  try {
    const newPath = await FileStorageService.checkMoveFileToDocuments(
      path,
      StorageConstants.PHOTOS_FOLDER
    );
    if (!newPath) return;
    data.push({
      id: String(data.length + 1),
      path: newPath,
      width,
      height,
    });
    saveData();
  } catch (error) {
    console.warn('ImageListStore::addImage', error);
  }
}

export default { init, getObservableImageList, addImage };
