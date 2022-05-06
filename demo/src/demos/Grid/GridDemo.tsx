/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { CodeSample } from '../../common/CodeSample';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { DemoSurfaceCard } from '../../common/DemoSurfaceCard';
import { DemoHomePageInfoCard } from '../../common/DemoHomePageInfoCard';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';
import { Button, Text, Code } from '@itwin/itwinui-react';
import '../../common/DemoTemplate.scss';

export const GridDemo = () => {
  return (
    <DemoTemplate title='Grid'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <Grid>
            <Grid.Item key={'info-card'} columnSpan={12}>
              <DemoHomePageInfoCard />
            </Grid.Item>
            <Grid.Item
              key={'demo-group-1'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 6,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Grid.Item columnSpan'>
                <CodeSample>
                  columnSpan?: number | ResponsiveColumnSpan;
                </CodeSample>
                <br />
                <Text>
                  Sets column count for grid item - how many columns this item
                  spans. Max columnSpan is 12.
                </Text>
                <Text>
                  <ul>
                    <li>
                      <Code>number</Code> - spans grid item same amount in all
                      screen sizes;
                    </li>
                    <li>
                      <Code>ResponsiveColumnSpan</Code> - object to specify grid
                      column span in specific screen sizes;
                    </li>
                  </ul>
                </Text>
                <br />
                <Text>default 1</Text>
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'demo-group-2'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 6,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Grid.Item columnStart'>
                <CodeSample>
                  {`/** @default 'auto' */
columnStart?: auto | number | ResponsiveColumnStart;`}
                </CodeSample>
                <Text>
                  Sets on which column grid item starts. Eg. When set to 10,
                  grid item starts on 10th column.
                </Text>

                <Text>
                  <ul>
                    <li>
                      <Code>auto</Code> - places grid item in nearest empty
                      suitable grid column in all screen sizes;
                    </li>
                    <li>
                      <Code>number</Code> - places grid item in specific grid
                      column in all screen sizes;
                    </li>
                    <li>
                      <Code>ResponsiveColumnStart</Code> - object to specify
                      grid column to place item in specific screen sizes;
                    </li>
                  </ul>
                </Text>
                <br />
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'demo-group-3'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Props types'>
                <CodeSample>
                  {`type ResponsiveColumnSpan = 
{
  mobile: number; 
  landscapeMobile: number; 
  tablet: number; 
  smallMonitor: number; 
  monitor: number;
}`}
                </CodeSample>

                <CodeSample>
                  {`type ResponsiveColumnStart = 
{
  mobile: 'auto' | number; 
  landscapeMobile: 'auto' | number; 
  tablet: 'auto' | number; 
  smallMonitor: 'auto' | number; 
  monitor: 'auto' | number;
}`}
                </CodeSample>
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              columnSpan={{
                monitor: 5,
                smallMonitor: 5,
                tablet: 5,
                landscapeMobile: 5,
                mobile: 12,
              }}
            >
              <Text>
                This button is placed using Grid.Item with{' '}
                <Code>columnSpan={3}</Code> and <Code>columnStart={10}</Code>.
              </Text>
            </Grid.Item>
            <Grid.Item
              key={'offset-button'}
              columnSpan={{
                monitor: 3,
                smallMonitor: 3,
                tablet: 3,
                landscapeMobile: 3,
                mobile: 12,
              }}
              columnStart={{
                monitor: 10,
                smallMonitor: 10,
                tablet: 10,
                landscapeMobile: 10,
                mobile: 'auto',
              }}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              className='demo-transparent-background'
            >
              <Button>Button</Button>
            </Grid.Item>
            <Grid.Item
              key={'example-card-1'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Example code'>
                <CodeSample>{`<Grid.Item
  columnSpan={{
    monitor: 4,
    smallMonitor: 4,
    tablet: 4,
    landscapeMobile: 6,
    mobile: 12,
  }}
>
  [content]
</Grid.Item>`}</CodeSample>
                <CodeSample>{`<Grid.Item columnSpan={4}>[content]</Grid.Item>`}</CodeSample>
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'example-card-2'}
              columnSpan={{
                monitor: 8,
                smallMonitor: 8,
                tablet: 8,
                landscapeMobile: 12,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Example code'>
                <div>
                  <CodeSample>{`<Grid.Item columnStart={10}>[content]</Grid.Item>`}</CodeSample>
                  <CodeSample>{`<Grid.Item
  columnStart={{
    monitor: 10,
    smallMonitor: 8,
    tablet: 6,
    landscapeMobile: 4,
    mobile: 2,
  }}
>
  [content]
</Grid.Item>`}</CodeSample>
                </div>
              </DemoSurfaceCard>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridDemo;
