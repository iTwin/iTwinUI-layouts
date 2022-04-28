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
  type TableStoryDataType = {
    index: number;
    name: string;
    description: string;
    id: string;
    startDate: Date;
    endDate: Date;
  };

  const columns = React.useMemo(
    (): any[] => [
      {
        Header: 'Table',
        columns: [
          {
            id: 'index',
            Header: '#',
            accessor: 'index',
            width: 80,
            disableResizing: true,
          },
          {
            id: 'name',
            Header: 'Name',
            accessor: 'name',
          },
          {
            id: 'description',
            Header: 'Description',
            accessor: 'description',
            fieldType: 'text',
            minWidth: 100,
          },
          {
            id: 'id',
            Header: 'ID',
            accessor: 'id',
            width: 100,
            disableResizing: true,
          },
          {
            id: 'startDate',
            Header: 'Start date',
            accessor: 'startDate',
            Cell: (props: any) => {
              return props.row.original.startDate.toLocaleDateString('en-US');
            },
            width: 100,
            disableResizing: true,
          },
          {
            id: 'endDate',
            Header: 'End date',
            Cell: (props: any) => {
              return props.row.original.endDate.toLocaleDateString('en-US');
            },
            maxWidth: 200,
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(
    () =>
      Array(24)
        .fill(null)
        .map((_, index) => ({
          index: index + 1,
          name: `Name${index + 1}`,
          description: `Description${index + 1}`,
          id: `11${index}`,
          startDate: new Date(`May ${index + 1}, 2021`),
          endDate: new Date(`Jun ${index + 1}, 2021`),
        })),
    [],
  );

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
          <Surface elevation={1}>
            <Table
              columns={columns}
              data={data}
              emptyTableContent='No data.'
              isLoading={false}
              isSortable={true}
              style={{ maxHeight: '70vh' }}
            />
          </Surface>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default TableLayoutDemo;
