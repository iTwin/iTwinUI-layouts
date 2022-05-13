/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React, { Children } from 'react';
import cx from 'classnames';
import { useThemeContext } from './ThemeContext';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import vsLight from 'prism-react-renderer/themes/vsLight';
import vsDark from 'prism-react-renderer/themes/vsDark';
import './CodeSample.scss';

export type CodeSampleProps = {
  code: string;
  language?: Language;
  showLineNumbers?: boolean;
};

export const CodeSample = (props: CodeSampleProps) => {
  const { code, language = 'tsx', showLineNumbers = false } = props;
  const { theme } = useThemeContext();

  return (
    <Highlight
      {...defaultProps}
      theme={theme === 'light' ? vsLight : vsDark}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={cx(`code-sample`, className)} style={style}>
          {tokens.map((line, i) => (
            <code
              key={i}
              {...getLineProps({
                line,
                className: 'code-sample-line',
              })}
            >
              {showLineNumbers && (
                <span className='code-sample-line-number'>{i + 1}</span>
              )}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </code>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeSample;
