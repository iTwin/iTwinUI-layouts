/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import { Headline, Text, Button, Code, Surface } from '@itwin/itwinui-react';

const codeDemo = `import '@itwin/itwinui-layouts-css/styles.css';
import { PageLayout } from '@itwin/itwinui-layouts-react';
  
const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader />
      </PageLayout.Header>

      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>

      <PageLayout.Content padded>
        <PageLayout.TitleArea>
          <DemoTitleArea />
        </PageLayout.TitleArea>
        <PageLayout.ToolsArea
          left={<DemoButton />}
          right={<DemoButton />}
        />
        <Surface elevation={1} >
          <DemoContent />
        </Surface>
      </PageLayout.Content>
    </PageLayout>
  );
}`;

export const PageLayoutPaddedDemo = () => {
  return (
    <DemoTemplate title='App' codeExample={codeDemo}>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav activeItemKey='Model' />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <PageLayout.TitleArea>
            <Headline>This is PageLayout with padding</Headline>
            <Text>
              This page layout has padded content. You can use it for Home page,
              dashboards, tables, settings and other content that does not need
              to be full frame.
            </Text>
            <br />
            <Text>
              The content is automatically centered in large screens and has{' '}
              <Code>maxWidth: 1440px</Code> for better visuals.
            </Text>
            <br />
            <Text>
              Page title and this description is positioned in{' '}
              <Code>PageLayout.TitleArea</Code> component.
            </Text>
            <Text>
              Buttons bellow are positioned in <Code>PageLayout.ToolsArea</Code>{' '}
              component. It has <Code>left</Code> and <Code>right</Code> props
              to place tools accordingly. You can add anything you want in this
              area - search bar, filters, button groups, etc.
            </Text>
          </PageLayout.TitleArea>
          <PageLayout.ToolsArea
            left={<Button key='new'>Left tools</Button>}
            right={<Button key='new'>Right tools</Button>}
          />
          <Surface elevation={1} style={{ width: '100%', height: '100%' }}>
            <div />
          </Surface>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutPaddedDemo;
