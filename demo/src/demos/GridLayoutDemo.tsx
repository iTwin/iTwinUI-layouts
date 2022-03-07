/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import { Tile, Subheading } from '@itwin/itwinui-react';
import SvgImodelHollow from '@itwin/itwinui-icons-react/cjs/icons/ImodelHollow';

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
                <Tile
                  name='Tile name'
                  description='Description #1'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #2'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #3'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #4'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #5'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #6'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #7'
                  thumbnail={<SvgImodelHollow />}
                />
                <Tile
                  name='Tile name'
                  description='Description #8'
                  thumbnail={<SvgImodelHollow />}
                />
              </PageLayout.Grid>
            </div>
          </PageLayout.PaddedContent>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
