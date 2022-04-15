/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { FluidGrid, PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Tile,
  Headline,
  Text,
  LabeledInput,
  Button,
} from '@itwin/itwinui-react';
import {
  SvgImodelHollow,
  SvgSearch,
  SvgAdd,
  SvgHome,
  SvgConfiguration,
  SvgModel,
} from '@itwin/itwinui-icons-react';
import { useMobile } from '../common/useMobile';
import DemoMobileNavigationBar from '../common/DemoMobileNavigationBar';
import DemoHeader4 from '../common/DemoHeader4';
import DemoHeader5 from '../common/DemoHeader5';

const mobileNavigationItems = [
  { title: 'Home', icon: <SvgHome />, url: '/' },
  { title: 'Model', icon: <SvgModel />, isActive: true, url: '/grid-layout7' },
  { title: 'Configuration', icon: <SvgConfiguration />, url: '/' },
];

export const GridLayoutDemo = () => {
  const isMobile = useMobile();
  return (
    <DemoTemplate title='Grid Layout'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader5 />
        </PageLayout.Header>

        {!isMobile && (
          <PageLayout.SideNavigation>
            <DemoSideNav activeItemKey='Browse' />
          </PageLayout.SideNavigation>
        )}
        {isMobile && <DemoMobileNavigationBar items={mobileNavigationItems} />}

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
          <PageLayout.ToolsArea
            left={
              <Button
                startIcon={<SvgAdd />}
                styleType='high-visibility'
                key='new'
              >
                New
              </Button>
            }
            right={
              <LabeledInput
                key='search'
                iconDisplayStyle='inline'
                svgIcon={<SvgSearch />}
              />
            }
          />
          <FluidGrid>
            {Array(12)
              .fill(null)
              .map((_, index) => (
                <Tile
                  key={index}
                  name={`Item #${index}`}
                  variant={isMobile ? 'folder' : 'default'}
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
