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
  language?: string;
  style?: React.CSSProperties;
};

export const CodeSample = ({
  children,
  language = 'typescript',
  style,
}: CodeSampleProps) => {
  const { theme } = useThemeContext();
  return (
    <SyntaxHighlighter
      customStyle={{
        fontSize: '1.1em',
        lineHeight: '1.2em',
        ...style,
      }}
      language={language}
      style={theme === 'light' ? vs : darcula}
      codeTagProps={{
        style: { whiteSpace: 'break-spaces', wordBreak: 'break-word' },
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSample;
