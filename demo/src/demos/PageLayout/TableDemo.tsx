/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';
import { useMediaQuery } from '@itwin/itwinui-react/cjs/core/utils';
import {
  Headline,
  Text,
  Button,
  Code,
  Surface,
  Table,
} from '@itwin/itwinui-react';

const codeDemo = `import '@itwin/itwinui-layouts-css/styles.css';
import { PageLayout } from '@itwin/itwinui-layouts-react';
  
const Demo = () => {
  return (
    <PageLayout>
      <PageLayout.Header>
        <DemoHeader />
      </PageLayout.Header>

      <PageLayout.SideNavigation>
        <DemoSideNav />
      </PageLayout.SideNavigation>

      <PageLayout.Content padded>
        <PageLayout.TitleArea>
          <DemoTitleArea />
        </PageLayout.TitleArea>
        <PageLayout.ToolsArea
          left={<DemoButton />}
          right={<DemoButton />}
        />
        <Surface elevation={1} >
          <DemoTable />
        </Surface>
      </PageLayout.Content>
    </PageLayout>
  );
}`;

export const TableDemo = () => {
  const largeScreen = useMediaQuery('(min-width: 768px)');
  const fullColumns = React.useMemo(
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

  const smallColumns = React.useMemo(
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
    <DemoTemplate title='App' codeExample={codeDemo}>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav activeItemKey='Model' />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <PageLayout.TitleArea>
            <Headline>This is PageLayout with padding</Headline>
            <Text>
              We added <Code>Table</Code> to this page content.
            </Text>
          </PageLayout.TitleArea>
          <PageLayout.ToolsArea
            left={<Button key='new'>Left tools</Button>}
            right={<Button key='new'>Right tools</Button>}
          />
          <Surface elevation={1} style={{ width: '100%' }}>
            <Table
              columns={largeScreen ? fullColumns : smallColumns}
              data={data}
              emptyTableContent='No data.'
              isLoading={false}
              isSortable={true}
              style={{ maxHeight: '500px' }}
            />
          </Surface>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default TableDemo;
