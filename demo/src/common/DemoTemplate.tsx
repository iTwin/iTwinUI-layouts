/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './DemoTemplate.scss';
import {
  IconButton,
  ButtonGroup,
  Button,
  Text,
  ThemeType,
  InformationPanel,
  InformationPanelHeader,
  InformationPanelWrapper,
  Tooltip,
} from '@itwin/itwinui-react';
import { SvgDeveloper } from '@itwin/itwinui-icons-react';
import { ThemeButton } from '../common/ThemeButton';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import CodeSample from './CodeSample';

export type DemoTemplateProps = {
  title: string;
  children: React.ReactNode;
  codeExample: string;
};

const isTestRun = () => {
  return window.localStorage.getItem('testRun') === 'true';
};

export const DemoTemplate = (props: DemoTemplateProps) => {
  const { children, title, codeExample } = props;

  const [showCodeDemo, setShowCodeDemo] = React.useState(false);
  const [copyTooltipVisible, setCopyTooltipVisible] = React.useState(false);
  const [theme, setTheme] = React.useState<ThemeType>(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  const showCopiedTooltip = () => {
    setCopyTooltipVisible(true);
    setTimeout(() => {
      setCopyTooltipVisible(false);
    }, 500);
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <InformationPanelWrapper>
        <div className='demo-template-container'>
          <div className='demo-template-content'>
            {children}
            {!isTestRun() && (
              <ButtonGroup className='demo-template-button-overlay'>
                <ThemeButton />
                <IconButton onClick={() => setShowCodeDemo((f) => !f)}>
                  <SvgDeveloper />
                </IconButton>
              </ButtonGroup>
            )}
          </div>

          <InformationPanel style={{ width: '40%' }} isOpen={showCodeDemo}>
            <InformationPanelHeader
              actions={
                <div className='demo-template-code-header-actions'>
                  <Tooltip
                    content='Copied to clipboard'
                    visible={copyTooltipVisible}
                  >
                    <Button
                      onClick={() => {
                        navigator.clipboard.writeText(codeExample);
                        showCopiedTooltip();
                      }}
                      styleType='high-visibility'
                    >
                      Copy
                    </Button>
                  </Tooltip>
                </div>
              }
            >
              <Link to='../' className='iui-anchor'>
                ..
              </Link>
              <Text
                as='h1'
                variant='title'
                className='demo-template-code-header-title'
              >
                {title}
              </Text>
            </InformationPanelHeader>
            <CodeSample
              showLineNumbers
              style={{ height: '100%', border: 'none', margin: '0' }}
              code={codeExample}
            />
          </InformationPanel>
        </div>
      </InformationPanelWrapper>
    </ThemeContext.Provider>
  );
};

export default DemoTemplate;
