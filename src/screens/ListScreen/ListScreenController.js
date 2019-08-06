import { observable } from 'mobx';

import ImagePickerService from '../../services/ImagePickerService';

function createListScreenController(imageListStore) {
  const viewModel = observable.object({
    list: null,
    lastOperation: null,
  });
  let observeDisposer = null;

  init();

  async function init() {
    await imageListStore.init();
    observeImageList();
  }

  function observeImageList() {
    const imageList = imageListStore.getObservableImageList();
    observeDisposer = imageList.observe(imageListDidChange);
    viewModel.list = imageList;
  }

  function dispose() {
    observeDisposer && observeDisposer();
    observeDisposer = null;
  }

  function imageListDidChange({ type, index, removed, added }) {
    if (type === 'splice') {
      if (added.length > 0) {
        viewModel.lastOperation = {
          type: 'add',
          index,
          length: added.length,
        };
      } else if (removed.length > 0) {
        viewModel.lastOperation = {
          type: 'remove',
          index,
          length: removed.length,
        };
      }
    }
  }

  async function onAddImagePress() {
    const item = await ImagePickerService.pickImage();
    if (!item) {
      return;
    }
    await imageListStore.addImage({
      path: item.path,
      width: item.width,
      height: item.height,
    });
  }

  return {
    viewModel,
    onAddImagePress,
    dispose,
  };
}

export default createListScreenController;
