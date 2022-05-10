/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeSampleProps = {
  children: string;
};

export const CodeSample = ({ children }: CodeSampleProps) => {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={darcula}
      wrapLongLines={true}
      wrapLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSample;
