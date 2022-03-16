/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { Grid, PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Tile,
  Headline,
  Text,
  ButtonGroup,
  IconButton,
} from '@itwin/itwinui-react';
import SvgImodelHollow from '@itwin/itwinui-icons-react/esm/icons/ImodelHollow';
import SvgFilterHollow from '@itwin/itwinui-icons-react/esm/icons/FilterHollow';
import SvgSmileyHappyVeryHollow from '@itwin/itwinui-icons-react/esm/icons/SmileyHappyVeryHollow';

export const GridLayoutDemo = () => {
  return (
    <DemoTemplate title='Grid Layout'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded={true}>
          <PageLayout.TitleArea>
            <Headline>This is grid layout</Headline>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </PageLayout.TitleArea>
          <ButtonGroup>
            <IconButton styleType='borderless'>
              <SvgFilterHollow />
            </IconButton>
            <IconButton styleType='borderless'>
              <SvgSmileyHappyVeryHollow />
            </IconButton>
          </ButtonGroup>
          <Grid>
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
          </Grid>
          <Grid>
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
            <Tile
              name='Tile name'
              description='Description #9'
              thumbnail={<SvgImodelHollow />}
            />
            <Tile
              name='Tile name'
              description='Description #10'
              thumbnail={<SvgImodelHollow />}
            />
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
