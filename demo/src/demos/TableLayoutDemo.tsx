/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import {
  Headline,
  Text,
  LabeledInput,
  Button,
  Surface,
  Table,
  Anchor,
} from '@itwin/itwinui-react';
import { SvgSearch, SvgAdd } from '@itwin/itwinui-icons-react';

export const TableLayoutDemo = (): JSX.Element => {
  const onClickHandler = React.useCallback(() => console.log('blablabla'), []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Header name',
        columns: [
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
            width: 90,
          },
          {
            id: 'description',
            Header: 'description',
            accessor: 'description',
            maxWidth: 200,
          },
          {
            id: 'click-me',
            Header: 'Click',
            width: 100,
            Cell: () => {
              const onClick = () => onClickHandler();
              return <Anchor onClick={onClick}>Click me!</Anchor>;
            },
          },
        ],
      },
    ],
    [onClickHandler],
  );

  const data = Array(24)
    .fill(null)
    .map((_, index) => ({
      name: `Name${index}`,
      description: `Description${index}`,
    }));

  return (
    <DemoTemplate title='Table layout'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav activeItemKey='Browse' />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <PageLayout.TitleArea>
            <Headline>This is table layout</Headline>
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
          <PageLayout.DataArea>
            <Surface elevation={1}>
              <Table
                columns={columns}
                data={data}
                emptyTableContent='No data.'
                isLoading={false}
                isSortable={true}
              />
            </Surface>
          </PageLayout.DataArea>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default TableLayoutDemo;
