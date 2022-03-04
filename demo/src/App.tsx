/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { ThemeType, useTheme, Anchor, Text, Body } from '@itwin/itwinui-react';
import { Link } from 'react-router-dom';
import { DEMOS_LIST } from './demos/list';
import { PageLayoutDemo } from './demos/PageLayoutDemo';
import { GitHubBanner } from './common/GitHubBanner';

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
      <ul>
        {DEMOS_LIST.map(({ path, name }) => (
          <li key={path}>
            <Link to={path} className='iui-anchor'>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
