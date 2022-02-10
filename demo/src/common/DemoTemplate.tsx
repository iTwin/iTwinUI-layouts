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
import reactElementToJSXString from 'react-element-to-jsx-string';
import './DemoTemplate.scss';
import {
  ThemeType,
  useTheme,
  IconButton,
  ButtonGroup,
  Button,
  Text,
  Anchor,
} from '@itwin/itwinui-react';
import {
  SvgWindowFullScreen,
  SvgWindowCollapse,
  SvgSun,
  SvgMoon,
  SvgDockRight,
  SvgDockBottom,
} from '@itwin/itwinui-icons-react';

export type DemoTemplateProps = {
  children: React.ReactNode;
};

const toDemoCode = (code: string) => {
  return `const Demo = () => {
  return 
    ${code.replace(/\n/g, '\n    ')}
};`;
};

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<ThemeType>('os');
  useTheme(theme);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton styleType='default' onClick={changeTheme}>
      {theme === 'light' ? <SvgSun /> : <SvgMoon />}
    </IconButton>
  );
};

export const DemoTemplate = (props: DemoTemplateProps) => {
  const { children } = props;

  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const demoCode = toDemoCode(reactElementToJSXString(children));

  return (
    <div
      className={`demo-template-container ${
        isHorizontal && 'demo-template-container-vertical'
      }`}
    >
      {!isFullScreen && (
        <div className='demo-template-code'>
          <div className='demo-template-code-header'>
            <div className='demo-template-code-header-left'>
              <Anchor href='/iTwinUI-layouts/'>..</Anchor>

              <Text as='h1' variant='title'>
                Template name
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
      <div className='demo-template-content'>
        {children}
        <ButtonGroup className='demo-template-fullscreen-button'>
          <ThemeButton key='themeSwitched' />
          <IconButton onClick={() => setIsFullScreen((f) => !f)}>
            {isFullScreen ? <SvgWindowCollapse /> : <SvgWindowFullScreen />}
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default DemoTemplate;
