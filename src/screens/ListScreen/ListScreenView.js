import React from 'react';
import { observer } from 'mobx-react';

import ImageList from '../../components/ImageList';
import Container from '../../components/Container';

export default observer(({ controller }) => {
  const viewModel = controller.viewModel;
  return (
    <Container isSafeArea>
      <ImageList
        data={viewModel.list}
        lastOperation={viewModel.lastOperation}
      />
    </Container>
  );
});
