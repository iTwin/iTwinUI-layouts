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
  LabeledInput,
  Button,
  DropdownMenu,
  MenuItem,
  Footer,
} from '@itwin/itwinui-react';
import {
  SvgImodelHollow,
  SvgInfo,
  SvgSearch,
  SvgPlaceholder,
  SvgMore,
  SvgDownload,
  SvgAdd,
  SvgArrowRight,
  SvgRename,
  SvgList,
  SvgThumbnails,
  SvgDeveloper,
} from '@itwin/itwinui-icons-react';

export const GridLayoutDemo = () => {
  const toolsButtons = [
    <IconButton key={1}>
      <SvgDownload />
    </IconButton>,
    <IconButton key={2}>
      <SvgArrowRight />
    </IconButton>,
    <IconButton key={3}>
      <SvgRename />
    </IconButton>,
    <IconButton key={4}>
      <SvgDeveloper />
    </IconButton>,
  ];

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
          <PageLayout.ToolsArea
            left={[
              <Button
                startIcon={<SvgAdd />}
                styleType='high-visibility'
                key='new'
              >
                New
              </Button>,
              <ButtonGroup
                key='button-group'
                overflowButton={(oveflowStart) => (
                  <DropdownMenu
                    menuItems={(close) =>
                      Array(toolsButtons.length - oveflowStart + 1)
                        .fill(null)
                        .map((_, _index) => {
                          const index = oveflowStart + _index;
                          const onClick = () => {
                            close();
                          };
                          return (
                            <MenuItem
                              key={index}
                              onClick={onClick}
                              icon={<SvgPlaceholder />}
                            >
                              Button #{index}
                            </MenuItem>
                          );
                        })
                    }
                  >
                    <IconButton>
                      <SvgMore />
                    </IconButton>
                  </DropdownMenu>
                )}
              >
                {toolsButtons}
              </ButtonGroup>,
            ]}
            right={[
              <LabeledInput
                key='search'
                iconDisplayStyle='inline'
                svgIcon={<SvgSearch />}
              />,
              <ButtonGroup key='button-group2'>
                <IconButton key='left-smiley'>
                  <SvgList />
                </IconButton>
                <IconButton key='left-sad'>
                  <SvgThumbnails />
                </IconButton>
              </ButtonGroup>,
              <IconButton key='info'>
                <SvgInfo />
              </IconButton>,
            ]}
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
