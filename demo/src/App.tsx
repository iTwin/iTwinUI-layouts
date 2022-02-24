/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './App.scss';
import '@codesandbox/sandpack-react/dist/index.css';
import '@itwin/itwinui-layouts-css/styles.css';
import { Headline } from '@itwin/itwinui-react';
import { Link } from 'react-router-dom';
import { DEMOS_LIST } from './demos/list';

const App = () => {
  return (
    <div className='app'>
      <Headline>iTwinUI Layouts demo</Headline>
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
