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
import { ThemeProvider, ThemeType } from '@itwin/itwinui-react';
import { ThemeContext } from './common/ThemeContext';

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = React.useState<ThemeType>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme} className='custom-theme'>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <CustomThemeProvider>
        <Routes>
          <Route path='/' element={<App />} />
          {DEMOS_LIST.map(({ layouts }) =>
            layouts.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            )),
          )}
        </Routes>
      </CustomThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
