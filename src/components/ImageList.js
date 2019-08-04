import * as React from 'react';
import { FlatList, View, Text } from 'react-native';
import { css } from '@emotion/native';

import ImageListSeparator from './ImageListSeparator';
import ImageListItem from './ImageListItem';

export default ({ data, lastOperation, style, ...otherProps }) => {
  const listRef = React.useRef();

  //  const getItemLayout = React.useCallback((data, index)=>{
  //
  //  })

  const renderItem = React.useCallback(
    ({ item }) => <ImageListItem item={item} />,
    []
  );

  React.useEffect(() => {
    if (lastOperation && lastOperation.type === 'add') {
      setTimeout(() => {
        listRef.current && listRef.current.scrollToEnd();
      }, 100);
    }
  }, [lastOperation]);

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={ImageListSeparator}
      // getItemLayout={getItemLayout}
      style={[listStyle, style]}
      {...otherProps}
    />
  );
};

const listStyle = css`
  flex: 1;
`;
