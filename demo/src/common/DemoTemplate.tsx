/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from '@codesandbox/sandpack-react';
import cx from 'classnames';
import reactElementToJSXString from 'react-element-to-jsx-string';
import './DemoTemplate.scss';
import {
  IconButton,
  ButtonGroup,
  Button,
  Text,
  ThemeType,
} from '@itwin/itwinui-react';
import {
  SvgWindowFullScreen,
  SvgWindowCollapse,
  SvgDockRight,
  SvgDockBottom,
} from '@itwin/itwinui-icons-react';
import { ThemeButton } from '../common/ThemeButton';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import CodeSample from './CodeSample';

export type DemoTemplateProps = {
  title: string;
  children: React.ReactNode;
  codeExample?: string;
};

const toDemoCode = (code: string) => {
  return `const Demo = () => {
  return 
    ${code.replace(/\n/g, '\n    ')}
};`;
};

const isTestRun = () => {
  return window.localStorage.getItem('testRun') === 'true';
};

export const DemoTemplate = (props: DemoTemplateProps) => {
  const { children, title, codeExample } = props;

  const [isFullScreen, setIsFullScreen] = React.useState(isTestRun());
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const demoCode = codeExample ?? toDemoCode(reactElementToJSXString(children));
  const [theme, setTheme] = React.useState<ThemeType>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={cx('demo-template-container', {
          'demo-template-container-vertical': isHorizontal,
        })}
      >
        <div className='demo-template-content'>
          {children}
          {!isTestRun() && (
            <ButtonGroup className='demo-template-button-overlay'>
              <ThemeButton />
              <IconButton onClick={() => setIsFullScreen((f) => !f)}>
                {isFullScreen ? <SvgWindowCollapse /> : <SvgWindowFullScreen />}
              </IconButton>
            </ButtonGroup>
          )}
        </div>

        {!isFullScreen && (
          <div className='demo-template-code'>
            <div className='demo-template-code-header'>
              <div className='demo-template-code-header-left'>
                <Link
                  to='../'
                  className='iui-anchor demo-template-code-header-back'
                >
                  ..
                </Link>
                <Text
                  as='h1'
                  variant='title'
                  className='demo-template-code-header-title'
                >
                  {title}
                </Text>
              </div>
              <div className='demo-template-code-header-right'>
                <IconButton onClick={() => setIsHorizontal((f) => !f)}>
                  {isHorizontal ? <SvgDockRight /> : <SvgDockBottom />}
                </IconButton>
                <Button
                  onClick={() => navigator.clipboard.writeText(demoCode)}
                  styleType='high-visibility'
                >
                  Copy
                </Button>
              </div>
            </div>
            <CodeSample showLineNumbers>{demoCode}</CodeSample>
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default DemoTemplate;
