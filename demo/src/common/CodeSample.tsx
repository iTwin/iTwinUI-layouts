/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

export type CodeSampleProps = {
  children: React.ReactNode;
};

export const CodeSample = ({ children }: CodeSampleProps) => {
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: '1em' }}
      language='typescript'
      style={vs}
      wrapLongLines={true}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeSample;
