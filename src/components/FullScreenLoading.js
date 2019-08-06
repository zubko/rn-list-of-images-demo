import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from '@emotion/native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator size="large" />
  </Container>
);
