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
  GridItem,
  FluidGrid,
} from '@itwin/itwinui-layouts-react';
import {
  FileUpload,
  FileUploadTemplate,
  Surface,
  Tile,
} from '@itwin/itwinui-react';

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
            <GridItem
              key={1}
              columnSpan={{
                largeMonitor: 4,
                smallMonitor: 3,
                tablet: 3,
                mobile: 2,
                smallMobile: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '33px',
                }}
              >
                <Surface elevation={1}>
                  <FileUpload onFileDropped={() => {}}>
                    <FileUploadTemplate />
                  </FileUpload>
                </Surface>
              </div>
            </GridItem>
            <GridItem
              key={2}
              columnSpan={{
                largeMonitor: 8,
                smallMonitor: 5,
                tablet: 5,
                mobile: 2,
                smallMobile: 2,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '100%' }}>
                <div />
              </Surface>
            </GridItem>
            <GridItem
              key={3}
              columnSpan={{
                largeMonitor: 4,
                smallMonitor: 4,
                tablet: 4,
                mobile: 2,
                smallMobile: 2,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '250px' }}>
                <div />
              </Surface>
            </GridItem>
            <GridItem
              key={4}
              columnSpan={{
                largeMonitor: 4,
                smallMonitor: 2,
                tablet: 2,
                mobile: 1,
                smallMobile: 1,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '250px' }}>
                <div />
              </Surface>
            </GridItem>
            <GridItem
              key={5}
              columnSpan={{
                largeMonitor: 4,
                smallMonitor: 2,
                tablet: 2,
                mobile: 1,
                smallMobile: 1,
              }}
            >
              <Surface elevation={1} style={{ width: '100%', height: '250px' }}>
                <div />
              </Surface>
            </GridItem>
            <GridItem
              key={6}
              columnSpan={{
                largeMonitor: 12,
                smallMonitor: 8,
                tablet: 8,
                mobile: 4,
                smallMobile: 2,
              }}
            >
              <FluidGrid>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Tile
                      key={`Item #${index}`}
                      name={`Item #${index}`}
                      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat.'
                    />
                  ))}
              </FluidGrid>
            </GridItem>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default HomePageDemo;
