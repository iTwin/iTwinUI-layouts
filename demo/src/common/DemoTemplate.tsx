import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
} from '@codesandbox/sandpack-react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import './DemoTemplate.scss';
import { IconButton } from '@itwin/itwinui-react';
import {
  SvgWindowFullScreen,
  SvgWindowCollapse,
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

export const DemoTemplate = (props: DemoTemplateProps) => {
  const { children } = props;

  const [isFullScreen, setIsFullScreen] = React.useState(false);

  return (
    <div className={'demo-template-container'}>
      <div className={'demo-template-content'}>
        {children}
        <IconButton
          className='demo-template-fullscreen-button'
          onClick={() => setIsFullScreen((f) => !f)}
        >
          {isFullScreen ? <SvgWindowCollapse /> : <SvgWindowFullScreen />}
        </IconButton>
      </div>
      {!isFullScreen && (
        <div className={'demo-template-code'}>
          <SandpackProvider template='react-ts'>
            <SandpackLayout theme='github-light'>
              <SandpackCodeViewer
                code={toDemoCode(reactElementToJSXString(children))}
                showTabs={false}
              />
            </SandpackLayout>
          </SandpackProvider>
        </div>
      )}
    </div>
  );
};

export default DemoTemplate;
