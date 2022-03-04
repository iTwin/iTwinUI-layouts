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
  Anchor,
} from '@itwin/itwinui-react';
import {
  SvgWindowFullScreen,
  SvgWindowCollapse,
  SvgDockRight,
  SvgDockBottom,
} from '@itwin/itwinui-icons-react';
import { ThemeButton } from '../common/ThemeButton';

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

export const DemoTemplate = (props: DemoTemplateProps) => {
  const { children, title } = props;

  const [isFullScreen, setIsFullScreen] = React.useState(false);
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
        <ButtonGroup className='demo-template-button-overlay'>
          <ThemeButton />
          <IconButton onClick={() => setIsFullScreen((f) => !f)}>
            {isFullScreen ? <SvgWindowCollapse /> : <SvgWindowFullScreen />}
          </IconButton>
        </ButtonGroup>
      </div>

      {!isFullScreen && (
        <div className='demo-template-code'>
          <div className='demo-template-code-header'>
            <div className='demo-template-code-header-left'>
              <Anchor
                href='../'
                className='demo-template-code-header-back'
                onClick={(e) => {
                  e.preventDefault();
                  location.hash = '';
                }}
              >
                ..
              </Anchor>

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
