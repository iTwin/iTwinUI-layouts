/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import { Text, Button, Checkbox, LabeledInput } from '@itwin/itwinui-react';

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

export const PageLayoutStickyBarDemo = () => {
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
            <Text variant='headline' as='h1'>
              This is PageLayout with footer
            </Text>
          </PageLayout.TitleArea>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--iui-size-s)',
            }}
          >
            <LabeledInput label='Name' />
            <LabeledInput label='Description' />
            <LabeledInput label='Country' />
            <LabeledInput label='City' />
          </form>
        </PageLayout.Content>
        <PageLayout.ActionBar>
          <div className='iui-layouts-page-content-action-bar-zones'>
            <div className='iui-layouts-page-content-action-bar-zones-left'>
              <Checkbox label='Remember my settings' />
            </div>
            <div className='iui-layouts-page-content-action-bar-zones-center'>
              <Button styleType='cta' size='large'>
                Create
              </Button>
              <Button size='large'>Cancel</Button>
            </div>
            <div className='iui-layouts-page-content-action-bar-zones-right' />
          </div>
        </PageLayout.ActionBar>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutStickyBarDemo;
