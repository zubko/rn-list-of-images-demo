import { observable } from 'mobx';

import * as ImagePickerService from '../../services/ImagePickerService';

function createListScreenController(imageListStore) {
  const imageList = imageListStore.getObservableImageList();

  const viewModel = observable.object({
    list: imageList,
    lastOperation: null,
  });

  let observeDisposer = imageList.observe(({ type, index, removed, added }) => {
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
  });

  function dispose() {
    observeDisposer && observeDisposer();
    observeDisposer = null;
  }

  async function onAddImagePress() {
    const item = await ImagePickerService.pickImage();
    if (item) {
      imageListStore.addImage({
        path: item.path,
        width: item.width,
        height: item.height,
      });
    }
  }

  return {
    viewModel,
    onAddImagePress,
    dispose,
  };
}

export default createListScreenController;
