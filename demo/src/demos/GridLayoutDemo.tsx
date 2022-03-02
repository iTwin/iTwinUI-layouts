/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import {
  PageLayout,
  Grid,
  Card,
  Grid1,
  Grid2,
} from '@itwin/itwinui-layouts-react';

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

        <PageLayout.Content
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '32px',
            gap: '24px',
          }}
        >
          <Grid>
            <Card style={{ gridColumn: '1 / -1', gridRow: 'span 1' }} />
            <Card style={{ gridRow: 'span 4', gridColumn: 'span 2' }} />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
          <Grid1>
            <Card style={{ gridColumn: '1 / -1', gridRow: 'span 1' }} />
            <Card style={{ gridRow: 'span 4', gridColumn: 'span 4' }} />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid1>
          <Grid2>
            <Card style={{ gridColumn: '1 / -1', gridRow: 'span 1' }} />
            <Card style={{ gridRow: 'span 4', gridColumn: 'span 2' }} />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid2>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
