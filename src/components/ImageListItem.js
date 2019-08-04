import * as React from 'react';
import { View, Text } from 'react-native';
import { css } from '@emotion/native';

export default ({ item }) => (
  <View style={itemStyle}>
    <Text>{JSON.stringify(item)}</Text>
  </View>
);

const itemStyle = css`
  height: 100;
  border-width: 1px;
  border-color: black;
`;
