import * as React from 'react';
import { FlatList, Dimensions } from 'react-native';
import { css } from '@emotion/native';

import ImageListSeparator from './ImageListSeparator';
import ImageListItem, { heightForItem } from './ImageListItem';

const SCREEN = Dimensions.get('screen');
const COMPONENT_WIDTH = SCREEN.width;
const VIEWABILITY_CONFIG = {
  minimumViewTime: 50,
  viewAreaCoveragePercentThreshold: 5,
};

export default ({ data, lastOperation, style, ...otherProps }) => {
  const listRef = React.useRef();

  const getItemLayout = useGetItemLayout({
    data,
    componentWidth: COMPONENT_WIDTH,
    lastOperation,
  });

  const renderItem = React.useCallback(
    ({ item }) => (
      <ImageListItem item={item} componentWidth={COMPONENT_WIDTH} />
    ),
    []
  );

  useScrollToEndAfterNewItem({ lastOperation, listRef });

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={ImageListSeparator}
      getItemLayout={getItemLayout}
      style={[listStyle, style]}
      viewabilityConfig={VIEWABILITY_CONFIG}
      {...otherProps}
    />
  );
};

export function useGetItemLayout({ data, componentWidth, lastOperation }) {
  const heights = React.useMemo(
    () =>
      heightsForItems({
        data,
        componentWidth,
        separatorHeight: ImageListSeparator.HEIGHT,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, lastOperation]
  );

  return React.useCallback((_, index) => heights[index], [heights]);
}

export function heightsForItems({ data, componentWidth, separatorHeight }) {
  const result = Array(data.length);
  let offset = 0;
  for (let i = 0; i < data.length; i += 1) {
    const item = data[i];
    const height = heightForItem({ ...item, componentWidth });
    result[i] = { length: height, offset, index: i };
    offset += height + separatorHeight;
  }
  return result;
}

export function useScrollToEndAfterNewItem({ lastOperation, listRef }) {
  React.useEffect(() => {
    if (lastOperation && lastOperation.type === 'add') {
      setTimeout(() => {
        listRef.current && listRef.current.scrollToEnd();
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastOperation]);
}

const listStyle = css`
  flex: 1;
`;
