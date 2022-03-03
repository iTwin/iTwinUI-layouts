/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ThemeType, useTheme, IconButton } from '@itwin/itwinui-react';
import { SvgSun, SvgMoon } from '@itwin/itwinui-icons-react';

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<ThemeType>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );
  useTheme(theme);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton styleType='default' onClick={changeTheme}>
      {theme === 'light' ? <SvgMoon /> : <SvgSun />}
    </IconButton>
  );
};

export default ThemeButton;
