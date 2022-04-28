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
import {
  Button,
  Surface,
  Text,
  UserIcon,
  UserIconGroup,
} from '@itwin/itwinui-react';
import { SvgImodelHollow } from '@itwin/itwinui-icons-react';

export const HomePageDemo = () => {
  const userNames = [
    { name: 'Terry Rivers', abbreviation: 'TR', color: '#56AA1C' },
    { name: 'Kayla Smith', abbreviation: 'KS', color: '#2B9CA7' },
    { name: 'Celine Adams', abbreviation: 'CA', color: '#00426B' },
  ];

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
              <Surface elevation={1}>
                <DemoHomePageInfoCard
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
                      {userNames.map((user, index) => (
                        <UserIcon
                          key={`user${index}`}
                          title={user.name}
                          abbreviation={user.abbreviation}
                          backgroundColor={user.color}
                        />
                      ))}
                    </UserIconGroup>
                  }
                />
              </Surface>
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
              <Surface
                elevation={1}
                style={{
                  width: '100%',
                  minHeight: '400px',
                  height: '100%',
                }}
              >
                <DemoSurfaceCard title='Demo group 1' centeredContent>
                  No data
                </DemoSurfaceCard>
              </Surface>
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
              <Surface
                elevation={1}
                style={{
                  width: '100%',
                  minHeight: '400px',
                  height: '100%',
                }}
              >
                <DemoSurfaceCard title='Demo group 2' centeredContent>
                  No data
                </DemoSurfaceCard>
              </Surface>
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
              <Surface
                elevation={1}
                style={{ width: '100%', minHeight: '400px', height: '100%' }}
              >
                <DemoSurfaceCard title='Demo group 3' centeredContent>
                  No data
                </DemoSurfaceCard>
              </Surface>
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
              key={'example-card-2'}
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
