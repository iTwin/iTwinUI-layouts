/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { ThemeType, useTheme, Anchor, Text, Body } from '@itwin/itwinui-react';
import { PageLayoutDemo } from './demos/PageLayoutDemo';
import { GitHubBanner } from './common/GitHubBanner';

const demos: Record<string, { name: string; component: () => JSX.Element }> = {
  '#page-layout': { name: 'Page Layout', component: PageLayoutDemo },
};

export const ThemeButton = () => {
  const [theme] = React.useState<ThemeType>('os');
  useTheme(theme);
};

const App = () => {
  const [hash, setHash] = React.useState(location.hash);
  React.useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(location.hash);
    });
  }, []);

  return (
    <>
      {demos[hash] ? (
        demos[hash].component()
      ) : (
        <div className='app'>
          <GitHubBanner />

          <Text as='h1' variant='headline'>
            iTwinUI-Layouts
          </Text>
          <Body>
            An open-source common UI layouts library built upon{' '}
            <Anchor href='https://itwin.github.io/iTwinUI-react/'>
              iTwinUI-react
            </Anchor>{' '}
            that helps us build a unified web experience.
          </Body>
          <img
            alt='GitHub last commit'
            src='https://img.shields.io/github/last-commit/itwin/iTwinUI-layouts'
          />
          <hr />
          <ul>
            {Object.entries(demos).map(([link, { name }]) => (
              <li key={name}>
                <Anchor href={link}>{name}</Anchor>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default App;
