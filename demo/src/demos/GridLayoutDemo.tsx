/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';

export const GridLayoutDemo = () => {
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
          <Grid>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
            <div>fjkdsldksf</div>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
