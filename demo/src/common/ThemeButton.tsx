/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { IconButton, ThemeProvider } from '@itwin/itwinui-react';
import { SvgSun, SvgMoon } from '@itwin/itwinui-icons-react';

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>(() =>
    matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark',
  );

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <IconButton styleType='default' onClick={changeTheme}>
          {theme === 'light' ? <SvgMoon /> : <SvgSun />}
        </IconButton>
      </ThemeProvider>
    </>
  );
};

export default ThemeButton;
