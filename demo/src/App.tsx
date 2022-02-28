/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Anchor, Headline } from '@itwin/itwinui-react';
import { PageLayoutDemo } from './demos/PageLayoutDemo';
import { GridLayoutDemo } from './demos/GridLayoutDemo';

const demos: Record<string, { name: string; component: () => JSX.Element }> = {
  '#page-layout': { name: 'Page Layout', component: PageLayoutDemo },
  '#grid-layout': { name: 'Grid Layout', component: GridLayoutDemo },
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
          <Headline>iTwinUI Layouts demo</Headline>
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
