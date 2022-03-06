/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import { Tile, Text, Subheading } from '@itwin/itwinui-react';

export const GridLayoutDemo = () => {
  return (
    <DemoTemplate title='Page Layout'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content>
          <PageLayout.PaddedContent>
            <div>
              <Subheading>Grid</Subheading>
              <PageLayout.Grid>
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
                <Tile name='Tile 1' />
              </PageLayout.Grid>
            </div>
          </PageLayout.PaddedContent>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
