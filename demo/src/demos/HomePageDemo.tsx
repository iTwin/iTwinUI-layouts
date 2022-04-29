/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { DemoSurfaceCard } from '../common/DemoSurfaceCard';
import { DemoHomePageInfoCard } from '../common/DemoHomePageInfoCard';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';
import { Button } from '@itwin/itwinui-react';

export const HomePageDemo = () => {
  return (
    <DemoTemplate title='Home Page'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <Grid>
            <Grid.Item key={'info-card'} columnSpan={12}>
              <DemoHomePageInfoCard />
            </Grid.Item>
            <Grid.Item
              key={'demo-group-1'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 6,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Demo group 1' centeredContent>
                No data
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'demo-group-2'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 6,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Demo group 2' centeredContent>
                No data
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'demo-group-3'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Demo group 3' centeredContent>
                No data
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'offset-button'}
              columnSpan={3}
              columnStart={10}
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button>Button</Button>
            </Grid.Item>
            <Grid.Item
              key={'example-card-1'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Example card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'example-card-2'}
              columnSpan={{
                monitor: 8,
                smallMonitor: 8,
                tablet: 8,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='List of products'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </DemoSurfaceCard>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default HomePageDemo;
