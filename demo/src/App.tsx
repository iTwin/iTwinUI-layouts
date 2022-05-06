/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Anchor, Text, Body, Tile, Title } from '@itwin/itwinui-react';
import { FluidGrid } from '@itwin/itwinui-layouts-react';
import { DEMOS_LIST } from './demos/list';
import { GitHubBanner } from './common/GitHubBanner';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className='app'>
      <GitHubBanner />

      <Text as='h1' variant='headline'>
        iTwinUI-layouts
      </Text>
      <Body>
        iTwinUI-layouts places given React (eg.{' '}
        <Anchor href='https://itwin.github.io/iTwinUI-react/'>
          iTwinUI-react
        </Anchor>
        ) components accordingly within the page with minimal effort on the
        development side.
      </Body>
      <img
        alt='GitHub last commit'
        src='https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts'
      />
      <hr />

      {DEMOS_LIST.map(({ listName, layouts }) => (
        <div key={listName} className='demo-layouts-list'>
          <Title>{listName}</Title>
          <FluidGrid>
            {layouts.map(({ path, name, description, icon }) => (
              <div
                key={name}
                onClick={() => navigate(path)}
                className='tile-wrapper'
              >
                <Tile
                  isActionable
                  name={name}
                  description={description}
                  thumbnail={icon}
                />
              </div>
            ))}
          </FluidGrid>
        </div>
      ))}
    </div>
  );
};

export default App;
