/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Headline,
  Text,
  Button,
  LabeledInput,
  Code,
} from '@itwin/itwinui-react';

export const PageLayoutPaddedDemo = () => {
  return (
    <DemoTemplate title='App'>
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
              full frame content.
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
          </PageLayout.TitleArea>
          <PageLayout.ToolsArea
            left={
              <Button styleType='high-visibility' key='new'>
                New
              </Button>
            }
            right={<LabeledInput key='search' iconDisplayStyle='inline' />}
          />
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutPaddedDemo;
