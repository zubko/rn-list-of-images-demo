import * as React from 'react';
import { View, Text } from 'react-native';
import { css } from '@emotion/native';

const ImageListItem = ({ item, componentWidth }) => (
  <View
    style={[itemStyle, { height: heightForItem({ ...item, componentWidth }) }]}
  >
    <Text>{JSON.stringify(item)}</Text>
  </View>
);

export default ImageListItem;

export function heightForItem({ width, height, componentWidth }) {
  if (height === 0 || width === 0) {
    return 0;
  }
  const ratio = width / height;
  return Math.floor(componentWidth / ratio);
}

const itemStyle = css`
  height: 100;
  border-width: 1px;
  border-color: black;
`;
