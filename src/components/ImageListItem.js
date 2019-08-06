import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { css } from '@emotion/native';

// let INDEX = 0;

const ImageListItem = ({ item, componentWidth }) => {
  // const [index] = React.useState(() => {
  //   return INDEX++;
  // });
  // React.useEffect(() => {
  //   console.log('mount', index);
  //   return () => {
  //     console.log('unmount', index);
  //   };
  // }, []);
  return (
    <View
      style={[
        itemStyle,
        { height: heightForItem({ ...item, componentWidth }) },
      ]}
    >
      <ImageBackground source={{ uri: item.path }} style={{ flex: 1 }}>
        <Text
          style={{
            color: 'white',
            shadowColor: 'black',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.7,
          }}
        >
          {JSON.stringify(item)}
        </Text>
      </ImageBackground>
    </View>
  );
};

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
  align-items: stretch;
  justify-content: flex-start;
`;
