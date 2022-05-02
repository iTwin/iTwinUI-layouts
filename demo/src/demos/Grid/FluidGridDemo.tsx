/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { FluidGrid, PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Tile,
  Headline,
  Text,
  LabeledInput,
  Button,
  Code,
  Anchor,
} from '@itwin/itwinui-react';
import { SvgImodelHollow, SvgSearch, SvgAdd } from '@itwin/itwinui-icons-react';
import { useNavigate } from 'react-router-dom';

export const GridLayoutDemo = () => {
  const navigate = useNavigate();

  return (
    <DemoTemplate title='Fluid grid'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav activeItemKey='Browse' />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <PageLayout.TitleArea>
            <Headline>Fluid grid</Headline>
            <Text>
              This page is example of how to use <Code>FluidGrid</Code>{' '}
              component. Try resizing this page and see how grid changes.
            </Text>
            <br />
            <Text>
              <Code>FluidGrid</Code> component has two props:{' '}
              <ol>
                <li>
                  <Code>Children</Code> - list of items you want to place in
                  FluidGrid. One option might be array of{' '}
                  <Anchor
                    href='https://itwin.github.io/iTwinUI-react/?path=/story/core-tile--actionable'
                    target='_blank'
                  >
                    Tiles
                  </Anchor>
                  .
                </li>
                <li>
                  <Code>minItemWidth</Code> - number that is being used in
                  calculating item count on a FluidGrid row. Default value is
                  256px.
                </li>
              </ol>
            </Text>
            <br />
            <Text>
              This page is based on{' '}
              <Anchor onClick={() => navigate('/page-layout-2')}>
                PageLayout with padding
              </Anchor>
              .
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
                  isActionable
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
