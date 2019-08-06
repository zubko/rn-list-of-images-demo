import React from 'react';
import { observer } from 'mobx-react';

import ImageList from '../../components/ImageList';
import Container from '../../components/Container';
import FullScreenLoading from '../../components/FullScreenLoading';

export default observer(({ controller }) => {
  const viewModel = controller.viewModel;
  return (
    <Container isSafeArea>
      {viewModel.list ? (
        <ImageList
          data={viewModel.list}
          lastOperation={viewModel.lastOperation}
        />
      ) : (
        <FullScreenLoading />
      )}
    </Container>
  );
});
