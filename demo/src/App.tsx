/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.css';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Anchor, Headline } from '@itwin/itwinui-react';
import { PageLayoutDemo } from './demos/PageLayoutDemo';

const demos: Record<string, { name: string; component: () => JSX.Element }> = {
  '#page-layout': { name: 'Page Layout', component: PageLayoutDemo },
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
        <div className='App'>
          <Headline>iTwinUI Layouts demo</Headline>
          {/* <iframe
        src='#page-layout'
        style={{ width: '100%', height: '100%' }}
        onLoad={(e) => {
          (e.target as HTMLIFrameElement).style.height = `${
            (e.target as HTMLIFrameElement).contentWindow!.document.body
              .scrollHeight
          }px`;
        }}
      /> */}
          <ul>
            {Object.entries(demos).map(([link, { name }]) => (
              <li key={name}>
                <Anchor href={link}>{name}</Anchor>
              </li>
            ))}
          </ul>
          {/* <PageLayoutDemo /> */}
        </div>
      )}
    </>
  );
};

export default App;
