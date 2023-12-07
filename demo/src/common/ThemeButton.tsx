/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { IconButton } from '@itwin/itwinui-react';
import { SvgSun, SvgMoon } from '@itwin/itwinui-icons-react';
import { useThemeContext } from './ThemeContext';

export const ThemeButton = () => {
  const { theme, setTheme } = useThemeContext();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <IconButton styleType='default' onClick={changeTheme}>
        {theme === 'light' ? <SvgMoon /> : <SvgSun />}
      </IconButton>
    </>
  );
};

export default ThemeButton;
