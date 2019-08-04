import React from 'react';

import InMemoryImageListStore from '../../store/InMemoryImageListStore';
import createListScreenController from './ListScreenController';

import ListScreenView from './ListScreenView';
import ListScreenNavigationOptions from './ListScreenNavigationOptions';

const ListScreenWireframe = ({ navigation }) => {
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

  return <ListScreenView controller={controller} />;
};

ListScreenWireframe.navigationOptions = ListScreenNavigationOptions;

export default ListScreenWireframe;
