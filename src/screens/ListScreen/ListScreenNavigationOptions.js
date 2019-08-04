import React from 'react';
import { Button } from 'react-native';

export default ({ navigation }) => ({
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
