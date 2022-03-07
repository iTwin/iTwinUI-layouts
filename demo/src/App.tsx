/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Anchor, Text, Body } from '@itwin/itwinui-react';
import { Link } from 'react-router-dom';
import { DEMOS_LIST } from './demos/list';
import { GitHubBanner } from './common/GitHubBanner';
import GridLayoutDemo from './demos/GridLayoutDemo';

const demos: Record<string, { name: string; component: () => JSX.Element }> = {
  '#page-layout': { name: 'Page Layout', component: PageLayoutDemo },
  '#grid-layout': { name: 'Grid Layout', component: GridLayoutDemo },
};

export const ThemeButton = () => {
  const [theme] = React.useState<ThemeType>('os');
  useTheme(theme);
};

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
