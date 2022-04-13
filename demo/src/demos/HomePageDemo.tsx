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
import { Tile } from '@itwin/itwinui-react';

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
            <GridItem key={1} gridColumnSpan={'full'} />
            <GridItem key={2} gridColumnSpan={4} />
            <GridItem key={3} gridColumnSpan={4} />
            <GridItem key={4} gridColumnSpan={4} />
            <GridItem key={5} gridColumnSpan={2} />
            <GridItem key={5} gridColumnSpan={10}>
              <FluidGrid>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Tile
                      key={index}
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
