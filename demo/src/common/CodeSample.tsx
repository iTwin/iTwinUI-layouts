/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useThemeContext } from './ThemeContext';

export type CodeSampleProps = {
  children: string;
  showLineNumbers?: boolean;
};

export const CodeSample = ({
  children,
  showLineNumbers = false,
}: CodeSampleProps) => {
  const { theme } = useThemeContext();
  return (
    <SyntaxHighlighter
      customStyle={theme === 'light' ? { fontSize: '1.1em' } : {}}
      language='typescript'
      style={theme === 'light' ? vs : darcula}
      showLineNumbers={showLineNumbers}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSample;
