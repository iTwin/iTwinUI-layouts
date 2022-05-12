/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';

export const PageLayoutDemo = () => {
  const codeDemo = `import { PageLayout } from '@itwin/itwinui-layouts-react';
  const Demo = () => {
  return (
    <DemoTemplate title='App'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader isSlim />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content>
          <DemoContent />
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
  `;
  return (
    <DemoTemplate title='App' codeExample={codeDemo}>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader isSlim />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav activeItemKey='Model' />
        </PageLayout.SideNavigation>

        <PageLayout.Content>
          <iframe
            src='https://dev.imodeljs.org/sandbox/embed/JonGraft/iTwinUI-layouts%20demo?editorPane=Hide&headers=Hide'
            loading='lazy'
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
              display: 'block',
            }}
            sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
          />
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutDemo;
