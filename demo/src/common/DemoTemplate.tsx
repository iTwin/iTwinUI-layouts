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
import { IconButton, ButtonGroup, Button, Text } from '@itwin/itwinui-react';
import {
  SvgWindowFullScreen,
  SvgWindowCollapse,
  SvgDockRight,
  SvgDockBottom,
} from '@itwin/itwinui-icons-react';
import { ThemeButton } from '../common/ThemeButton';
import { Link } from 'react-router-dom';

export type DemoTemplateProps = {
  title: string;
  children: React.ReactNode;
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
  const { children, title } = props;

  const [isFullScreen, setIsFullScreen] = React.useState(isTestRun());
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const demoCode = toDemoCode(reactElementToJSXString(children));

  return (
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
          <SandpackProvider template='react-ts'>
            <SandpackLayout theme='github-light'>
              <SandpackCodeViewer
                code={demoCode}
                showTabs={false}
                showLineNumbers={true}
                wrapContent={true}
              />
            </SandpackLayout>
          </SandpackProvider>
        </div>
      )}
    </div>
  );
};

export default DemoTemplate;
