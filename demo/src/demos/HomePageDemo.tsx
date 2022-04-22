/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { DemoSurfaceCard } from '../common/DemoSurfaceCard';
import { DemoHomePageHeader } from '../common/DemoHomePageHeader';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';
import { Surface, Text } from '@itwin/itwinui-react';
import { SvgImodelHollow } from '@itwin/itwinui-icons-react';

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
            <Grid.Item key={1} columnSpan={12}>
              <Surface elevation={1}>
                <DemoHomePageHeader
                  icon={<SvgImodelHollow />}
                  centerArea={
                    <div>
                      <Text variant='title'>This is title</Text>
                      <Text variant='leading'>Subheading is the best</Text>
                    </div>
                  }
                  rightArea={<div />}
                />
              </Surface>
            </Grid.Item>
            <Grid.Item
              key={3}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <Surface elevation={1}>
                <DemoSurfaceCard title='Demo'>blablabla</DemoSurfaceCard>
              </Surface>
            </Grid.Item>
            <Grid.Item
              key={4}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <Surface
                elevation={1}
                style={{
                  width: '100%',
                  height: 'fit-content',
                  minHeight: '350px',
                }}
              >
                <DemoSurfaceCard title='Demo'>blablabla</DemoSurfaceCard>
              </Surface>
            </Grid.Item>
            <Grid.Item
              key={5}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '350px' }}>
                <DemoSurfaceCard title='Demo'>blablabla</DemoSurfaceCard>
              </Surface>
            </Grid.Item>
            <Grid.Item
              key={6}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '250px' }}>
                <DemoSurfaceCard title='Demo'>blablabla</DemoSurfaceCard>
              </Surface>
            </Grid.Item>
            <Grid.Item
              key={7}
              columnSpan={{
                monitor: 8,
                smallMonitor: 8,
                tablet: 8,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '250px' }}>
                <DemoSurfaceCard title='Demo'>blablabla</DemoSurfaceCard>
              </Surface>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default HomePageDemo;
