import React from 'react';

import Apps from './index';
import { FixedIcon, Title, Text, Button } from '../../index';

import styled from 'styled-components';

export default {
  title: 'Data Display/Apps',
  component: Apps,
  parameters: {
    componentSubtitle: 'Apps container.',
  },
};

export const SimpleApp = (): React.ReactElement => {
  const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <AppContainer>
      <Apps>
        <FixedIcon type="customApp" />
        <Button size="lg" color="primary" variant="contained">
          Add Custom App
        </Button>
      </Apps>
      <Apps>
        <FixedIcon type="app" />
        <Title size="sm">App Name</Title>
        <Text size="lg">
          Sablier is an app for constant, continuous, by-the-second payments{' '}
        </Text>
      </Apps>
      <Apps>
        <FixedIcon type="app" />
        <Title size="sm">App Name</Title>
        <Text size="lg">
          Sablier is an app for constant, continuous, by-the-second payments{' '}
        </Text>
      </Apps>
      <Apps>
        <FixedIcon type="app" />
        <Title size="sm">App Name</Title>
        <Text size="lg">
          Sablier is an app for constant, continuous, by-the-second payments{' '}
        </Text>
      </Apps>
      <Apps>
        <FixedIcon type="app" />
        <Title size="sm">App Name</Title>
        <Text size="lg">
          Sablier is an app for constant, continuous, by-the-second payments{' '}
        </Text>
      </Apps>
    </AppContainer>
  );
};

/* export const SimpleApp = (): React.ReactElement => (
  <Apps>
    <Title size="md">App Name</Title>
  </Apps>
); */
