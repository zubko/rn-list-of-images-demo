import React from 'react';
import { Button } from 'react-native';
import { observer } from 'mobx-react';

import InMemoryImageListStore from '../../store/InMemoryImageListStore';
import ImageList from '../../components/ImageList';
import Container from '../../components/Container';

import createListScreenController from './ListScreenController';

const ListScreen = observer(({ navigation }) => {
  const [controller] = React.useState(() =>
    createListScreenController(InMemoryImageListStore)
  );
  React.useEffect(() => {
    navigation.setParams({ controller });
    return () => {
      controller.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

ListScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Image List',
  headerRight: (
    <Button
      onPress={
        navigation.state.params &&
        navigation.state.params.controller.onAddImagePress
      }
      title="Add"
    />
  ),
});

export default ListScreen;
