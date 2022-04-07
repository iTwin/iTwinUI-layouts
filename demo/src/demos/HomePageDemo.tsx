/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import {
  FluidGrid,
  PageLayout,
  Grid,
  Card,
} from '@itwin/itwinui-layouts-react';
import {
  Tile,
  Headline,
  Text,
  LabeledInput,
  Button,
} from '@itwin/itwinui-react';
import { SvgImodelHollow, SvgSearch, SvgAdd } from '@itwin/itwinui-icons-react';

export const HomePageDemo = () => {
  return (
    <DemoTemplate title='Home Page'>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content padded>
          <Grid>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Card key={index} />
              ))}
          </Grid1>
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default HomePageDemo;
