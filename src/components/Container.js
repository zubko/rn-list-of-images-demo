import * as React from 'react';
import { View, SafeAreaView } from 'react-native';

export default ({ isSafeArea, style, ...otherProps }) => {
  const Component = isSafeArea ? SafeAreaView : View;
  // eslint-disable-next-line react-native/no-inline-styles
  return <Component style={[{ flex: 1 }, style]} {...otherProps} />;
};
