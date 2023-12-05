/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import App from './App';
import { DEMOS_LIST } from './demos/list';
import '@itwin/itwinui-react/styles.css';

createRoot(document.getElementById('root') as HTMLElement).render(
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
);
