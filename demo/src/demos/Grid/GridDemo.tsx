/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../../common/DemoHeader';
import { DemoSideNav } from '../../common/DemoSideNav';
import { DemoTemplate } from '../../common/DemoTemplate';
import { DemoSurfaceCard } from '../../common/DemoSurfaceCard';
import { DemoHomePageInfoCard } from '../../common/DemoHomePageInfoCard';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';
import { Button, Text, Code } from '@itwin/itwinui-react';
import reactElementToJSXString from 'react-element-to-jsx-string';

export const GridDemo = () => {
  const gridItemCode1 = reactElementToJSXString(
    <Grid.Item
      columnSpan={{
        monitor: 4,
        smallMonitor: 4,
        tablet: 4,
        landscapeMobile: 6,
        mobile: 12,
      }}
    >
      [content]
    </Grid.Item>,
  );
  const gridItemCode2 = reactElementToJSXString(
    <Grid.Item columnSpan={4}>[content]</Grid.Item>,
  );
  const gridItemCode3 = reactElementToJSXString(
    <Grid.Item columnSpan={3} columnStart={10}>
      [content]
    </Grid.Item>,
  );
  const gridItemCode4 = reactElementToJSXString(
    <Grid.Item
      columnSpan={{
        monitor: 2,
        smallMonitor: 4,
        tablet: 6,
        landscapeMobile: 8,
        mobile: 10,
      }}
      columnStart={{
        monitor: 10,
        smallMonitor: 8,
        tablet: 6,
        landscapeMobile: 4,
        mobile: 2,
      }}
    >
      [content]
    </Grid.Item>,
  );

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
                <Text>
                  <Code>columnSpan?</Code>: number | ResponsiveColumnSpan;
                </Text>
                <br />
                <Text>
                  Sets column count for grid item - how many columns this item
                  spans. Max columnSpan is 12.
                </Text>
                <Text>
                  <ul>
                    <li>
                      `number` - spans grid item same amount in all screen
                      sizes;
                    </li>
                    <li>
                      `ResponsiveColumnSpan` - object to specify grid column
                      span in specific screen sizes;
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
                <Text>
                  <Code>columnStart?</Code>: auto | number |
                  ResponsiveColumnStart;
                </Text>
                <br />
                <Text>
                  Sets on which column grid item starts. Eg. When set to 10,
                  grid item starts on 10th column.
                </Text>
                <Text>
                  <ul>
                    <li>
                      `auto` - places grid item in nearest empty suitable grid
                      column in all screen sizes;
                    </li>
                    <li>
                      `number` - places grid item in specific grid column in all
                      screen sizes;
                    </li>
                    <li>
                      `ResponsiveColumnStart` - object to specify grid column to
                      place item in specific screen sizes;
                    </li>
                  </ul>
                </Text>
                <br />
                <Text>default `auto`</Text>
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
              <DemoSurfaceCard title='Props objects'>
                <Text>ResponsiveColumnSpan = </Text>
                <Text>mobile: number; </Text>
                <Text>landscapeMobile: number;</Text>
                <Text>tablet: number;</Text>
                <Text>smallMonitor: number;</Text>
                <Text>monitor: number;</Text>
                <br />
                <Text>ResponsiveColumnStart = </Text>
                <Text>mobile: `auto` | number; </Text>
                <Text>landscapeMobile: `auto` | number;</Text>
                <Text>tablet: `auto` | number;</Text>
                <Text>smallMonitor: `auto` | number;</Text>
                <Text>monitor: `auto` | number;</Text>
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item columnSpan={9}>
              <Text>
                This button is placed using Grid.Item with{' '}
                <Code>columnSpan={3}</Code> and <Code>columnStart={10}</Code>.
              </Text>
            </Grid.Item>
            <Grid.Item
              key={'offset-button'}
              columnSpan={3}
              columnStart={10}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                border: '1px solid #cdd2d6',
              }}
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
                <Text>{gridItemCode1}</Text>
                <br />
                <Text>{gridItemCode2}</Text>
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
                <Text>{gridItemCode3}</Text>
                <br />
                <Text>{gridItemCode4}</Text>
              </DemoSurfaceCard>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridDemo;
