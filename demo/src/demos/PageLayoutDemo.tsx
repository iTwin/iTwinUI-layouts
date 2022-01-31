/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';

export const PageLayoutDemo = () => {
  return (
    <DemoTemplate>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content>
          <div>Custom content</div>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutDemo;
