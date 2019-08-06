import { observable } from 'mobx';

const data = observable.array([]);

export function init() {
  return true;
}

export function getObservableImageList() {
  return data;
}

export function addImage({ path, width, height }) {
  data.push({
    id: String(data.length + 1),
    path,
    width,
    height,
  });
}

export default { init, getObservableImageList, addImage };
