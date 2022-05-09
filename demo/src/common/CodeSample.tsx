/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useThemeContext } from './ThemeContext';

export type CodeSampleProps = {
  children: React.ReactNode;
};

export const CodeSample = ({ children }: CodeSampleProps) => {
  const { theme } = useThemeContext();
  return (
    <SyntaxHighlighter
      language='typescript'
      style={theme === 'light' ? oneLight : oneDark}
      wrapLongLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSample;
