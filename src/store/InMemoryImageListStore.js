import { observable } from 'mobx';

const data = observable.array([
  { id: '1', path: 'path-1', width: 4000, height: 6000 },
  { id: '2', path: 'path-2', width: 3000, height: 4000 },
  { id: '3', path: 'path-3', width: 2000, height: 3000 },
  { id: '4', path: 'path-4', width: 1000, height: 2000 },
  { id: '5', path: 'path-5', width: 6000, height: 1000 },
  { id: '6', path: 'path-1', width: 4000, height: 6000 },
  { id: '7', path: 'path-2', width: 3000, height: 4000 },
  { id: '8', path: 'path-3', width: 2000, height: 3000 },
  { id: '9', path: 'path-4', width: 1000, height: 2000 },
  { id: '10', path: 'path-5', width: 6000, height: 1000 },
]);

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

export default { getObservableImageList, addImage };
