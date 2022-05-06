/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './DemoHomePageInfoCard.scss';
import { Code, Surface, Text } from '@itwin/itwinui-react';
import { SvgImodelHollow } from '@itwin/itwinui-icons-react';

export const DemoHomePageInfoCard = () => {
  return (
    <Surface elevation={1}>
      <div className='demo-home-page-info-card'>
        <div className='demo-home-page-info-card-icon'>
          <SvgImodelHollow />
        </div>
        <div className='demo-home-page-info-card-center'>
          <Text variant='title'>Grid</Text>
          <Text variant='leading'>
            This is example of how to use <Code>Grid</Code> and{' '}
            <Code>Grid.Item</Code>.
          </Text>
          <br />
          <Text>
            <Code>Grid</Code> is composed of 12 equal parts columns across all
            screen sizes.
          </Text>
          <br />
          <Text>
            Screen size breakpoints we use:
            <ul>
              <li>
                <Code>mobile</Code> - under 486px
              </li>
              <li>
                <Code>landscapeMobile</Code> - 487px to 768px
              </li>
              <li>
                <Code>tablet</Code> - 769px to 991px
              </li>
              <li>
                <Code>smallMonitor</Code> - 992px to 1399px
              </li>
              <li>
                <Code>monitor</Code> - over 1400px
              </li>
            </ul>
          </Text>
        </div>
        <div className='demo-home-page-info-card-right'>
          <Text variant='title'>Grid.Item</Text>
          <Text>
            <Code>Grid</Code> can have any React component as children. We
            recommend using <Code>Grid.Item</Code>.
          </Text>
          <br />
          <Text>
            <Code>Grid.Item</Code> props:
            <ul>
              <li>
                <Code>children</Code> - content you want to add to grid item.
              </li>
              <li>
                <Code>columnSpan</Code> - amount of columns grid item spans.
              </li>
              <li>
                <Code>columnStart</Code> - column number on which grid item
                starts.
              </li>
            </ul>
          </Text>
          <br />
          <Text>This card is taking 12/12 columns - full row.</Text>
          <Text>
            You can set same value of column span for all screen sizes using{' '}
            <Code>columnSpan</Code> and setting it to 12.
          </Text>
        </div>
      </div>
    </Surface>
  );
};

export default DemoHomePageInfoCard;
