import * as React from 'react';
import { View, SafeAreaView } from 'react-native';

export default ({ isSafeArea, style, ...otherProps }) => {
  const Component = isSafeArea ? SafeAreaView : View;
  return <Component style={[{ flex: 1 }, style]} {...otherProps} />;
};
