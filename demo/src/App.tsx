/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Text, Tile } from '@itwin/itwinui-react';
import { FluidGrid } from '@itwin/itwinui-layouts-react';
import { DEMOS_LIST } from './demos/list';
import { GitHubBanner } from './common/GitHubBanner';
import './App.scss';
import '@itwin/itwinui-layouts-css/styles.css';
import '@fontsource/noto-sans';
import '@fontsource/noto-sans-mono';

const App = () => {
  const navigate = useNavigate();
  return (
    <div className='app'>
      <GitHubBanner />

      <Text as='h1' variant='headline'>
        iTwinUI-layouts
      </Text>
      <Text>
        iTwinUI-layouts places given React (eg.{' '}
        <Anchor href='https://itwin.github.io/iTwinUI/react/'>
          iTwinUI-react
        </Anchor>
        ) components accordingly within the page with minimal effort on the
        development side.
      </Text>
      <img
        alt='GitHub last commit'
        src='https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts'
      />
      <hr />

      {DEMOS_LIST.map(({ listName, layouts }) => (
        <div key={listName} className='demo-layouts-list'>
          <Text as='h2' variant='title'>
            {listName}
          </Text>
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
