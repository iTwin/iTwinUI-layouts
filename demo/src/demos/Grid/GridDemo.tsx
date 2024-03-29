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

const codeDemo = `import '@itwin/itwinui-layouts-css/styles.css';
import { PageLayout, Grid } from '@itwin/itwinui-layouts-react';

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
        <Grid>
          <Grid.Item columnSpan={12}>
            <DemoHomePageInfoCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item
            columnSpan={{
              monitor: 3,
              smallMonitor: 3,
              tablet: 3,
              mobile: 12,
            }}
            columnStart={{
              monitor: 10,
              smallMonitor: 10,
              tablet: 10,
              mobile: 'auto',
            }}
            >
              <DemoButton />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 4,
            smallMonitor: 4,
            tablet: 4,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
          <Grid.Item columnSpan={{
            monitor: 8,
            smallMonitor: 8,
            tablet: 8,
            mobile: 12,
          }}>
            <DemoSurfaceCard />
          </Grid.Item>
        </Grid>
      </PageLayout.Content>
    </PageLayout>
  );
}`;

export const GridDemo = () => {
  return (
    <DemoTemplate title='Grid' codeExample={codeDemo}>
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
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Grid.Item columnSpan'>
                <CodeSample
                  code={`/** @default 1 */
columnSpan?: number | ResponsiveColumnSpan;`}
                />
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
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'demo-group-2'}
              columnSpan={{
                monitor: 4,
                smallMonitor: 4,
                tablet: 4,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Grid.Item columnStart'>
                <CodeSample
                  code={`
/** @default 'auto' */
columnStart?: auto | number | ResponsiveColumnStart;
`}
                />
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
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Props types'>
                <CodeSample
                  code={`
type ResponsiveColumnSpan = 
{
  mobile: number; 
  tablet: number; 
  smallMonitor: number; 
  monitor: number;
}         
`}
                />

                <CodeSample
                  code={`
type ResponsiveColumnStart = 
{
  mobile: 'auto' | number; 
  tablet: 'auto' | number; 
  smallMonitor: 'auto' | number; 
  monitor: 'auto' | number;
}`}
                />
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              columnSpan={{
                monitor: 5,
                smallMonitor: 5,
                tablet: 5,
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
                mobile: 12,
              }}
              columnStart={{
                monitor: 10,
                smallMonitor: 10,
                tablet: 10,
                mobile: 'auto',
              }}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
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
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Example code'>
                <CodeSample
                  code={`
<Grid.Item
  columnSpan={{
    monitor: 4,
    smallMonitor: 4,
    tablet: 4,
    mobile: 12,
  }}
>
  {content}
</Grid.Item>`}
                />
                <CodeSample
                  code={`<Grid.Item columnSpan={4}>{content}</Grid.Item>`}
                />
              </DemoSurfaceCard>
            </Grid.Item>
            <Grid.Item
              key={'example-card-2'}
              columnSpan={{
                monitor: 8,
                smallMonitor: 8,
                tablet: 8,
                mobile: 12,
              }}
            >
              <DemoSurfaceCard title='Example code'>
                <CodeSample
                  code={`<Grid.Item columnStart={10}>{content}</Grid.Item>`}
                />
                <CodeSample
                  code={`
<Grid.Item
  columnStart={{
    monitor: 10,
    smallMonitor: 8,
    tablet: 6,
    mobile: 2,
  }}
>
  {content}
</Grid.Item>`}
                />
              </DemoSurfaceCard>
            </Grid.Item>
          </Grid>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default GridDemo;
