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
import { Surface, Text, UserIcon, UserIconGroup } from '@itwin/itwinui-react';
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
                      <Text variant='title'>This is app title</Text>
                      <Text variant='leading'>
                        This subheading is the best. Giving description to the
                        title of the app.
                      </Text>
                    </div>
                  }
                  rightArea={
                    <UserIconGroup animated iconSize='medium'>
                      {Array(6)
                        .fill(null)
                        .map((_, index) => (
                          <UserIcon
                            key={`user${index}`}
                            title='Terry Rivers'
                            abbreviation='TR'
                            backgroundColor='#5e5e5e'
                          />
                        ))}
                    </UserIconGroup>
                  }
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
              <Surface
                elevation={1}
                style={{
                  width: '100%',
                  minHeight: '400px',
                  height: '100%',
                }}
              >
                <DemoSurfaceCard title='Demo group 1'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    No data
                  </div>
                </DemoSurfaceCard>
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
                  minHeight: '400px',
                  height: '100%',
                }}
              >
                <DemoSurfaceCard title='Demo group 2'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    No data
                  </div>
                </DemoSurfaceCard>
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
              <Surface
                elevation={1}
                style={{ width: '100%', minHeight: '400px', height: '100%' }}
              >
                <DemoSurfaceCard title='Demo group 3'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    No data
                  </div>
                </DemoSurfaceCard>
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
              <Surface
                elevation={1}
                style={{ width: '100%', minHeight: '250px', height: '100%' }}
              >
                <DemoSurfaceCard title='Example card'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </DemoSurfaceCard>
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
              <Surface
                elevation={1}
                style={{ width: '100%', minHeight: '250px', height: '100%' }}
              >
                <DemoSurfaceCard title='List of products'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </DemoSurfaceCard>
              </Surface>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default HomePageDemo;
