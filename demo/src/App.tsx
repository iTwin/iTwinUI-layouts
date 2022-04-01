/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Anchor, Text, Body, Tile, Button } from '@itwin/itwinui-react';
import { FluidGrid } from '@itwin/itwinui-layouts-react';
import { DEMOS_LIST } from './demos/list';
import { GitHubBanner } from './common/GitHubBanner';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

const App = () => {
  return (
    <div className='app'>
      <GitHubBanner />

      <Text as='h1' variant='headline'>
        iTwinUI-Layouts
      </Text>
      <Body>
        An open-source common UI layouts library used to display{' '}
        <Anchor href='https://itwin.github.io/iTwinUI-react/'>
          iTwinUI-react
        </Anchor>{' '}
        components.
      </Body>
      <img
        alt='GitHub last commit'
        src='https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts'
      />
      <hr />
      <FluidGrid>
        {DEMOS_LIST.map(({ path, name, description, icon }) => (
          <Tile
            key={name}
            name={name}
            description={description}
            thumbnail={icon}
            buttons={[
              <Button key='1' onClick={() => open(`#/${path}`, '_self')}>
                View
              </Button>,
            ]}
          />
        ))}
      </FluidGrid>
    </div>
  );
};

export default App;
