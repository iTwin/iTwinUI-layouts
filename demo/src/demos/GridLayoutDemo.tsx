/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { FluidGrid, PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Tile,
  Headline,
  Text,
  ButtonGroup,
  IconButton,
} from '@itwin/itwinui-react';
import {
  SvgImodelHollow,
  SvgFilterHollow,
  SvgSmileyHappyVeryHollow,
  SvgSearch,
} from '@itwin/itwinui-icons-react';

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

        <PageLayout.Content padded>
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
          <PageLayout.ContentTools
            left={
              <ButtonGroup>
                <IconButton styleType='borderless'>
                  <SvgFilterHollow />
                </IconButton>
                <IconButton styleType='borderless'>
                  <SvgSmileyHappyVeryHollow />
                </IconButton>
              </ButtonGroup>
            }
            right={
              <IconButton styleType='borderless'>
                <SvgSearch />
              </IconButton>
            }
          />
          <FluidGrid>
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <Tile
                  key={index}
                  name={`Item #${index}`}
                  thumbnail={<SvgImodelHollow />}
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   nisi ut aliquip ex ea commodo consequat.'
                />
              ))}
          </FluidGrid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridLayoutDemo;
