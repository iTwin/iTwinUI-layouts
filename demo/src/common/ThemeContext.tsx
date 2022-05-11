/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { ThemeType } from '@itwin/itwinui-react';

export const ThemeContext = React.createContext<
  | {
      theme: ThemeType;
      setTheme: (
        theme: ThemeType | ((prevColor: ThemeType) => ThemeType),
      ) => void;
    }
  | undefined
>(undefined);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context == undefined) {
    throw new Error(
      'useThemeContext must be used within a ThemeContext.Provider',
    );
  }
  return context;
};
