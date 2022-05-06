/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from './App';
import { DEMOS_LIST } from './demos/list';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {DEMOS_LIST.map(({ layouts }) =>
          layouts.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          )),
        )}
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
