/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ThemeType, useTheme, IconButton } from '@itwin/itwinui-react';
import { SvgSun, SvgMoon } from '@itwin/itwinui-icons-react';

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<ThemeType>('os');
  useTheme(theme);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton styleType='default' onClick={changeTheme}>
      {theme === 'light' ? <SvgSun /> : <SvgMoon />}
    </IconButton>
  );
};

export default ThemeButton;
