/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps, styleKeysValues } from '../../utils';
import { ScreenSizes } from './types';

export type GridItemProps = {
  /**
   * Children of the element
   */
  children?: React.ReactNode;
  /**
   * Column span for grid item
   * @default {smallMobile:1,mobile:1,tablet:1,smallMonitor:1,largeMonitor:1}
   */
  columnSpan?: ScreenSizes;
  /**
   * Column span for grid item
   * @default {smallMobile:0,mobile:0,tablet:0,smallMonitor:0,largeMonitor:0}
   */
  columnOffset?: ScreenSizes;
} & StylingProps;

export const GridItem = (props: GridItemProps) => {
  const { className, children, style, columnSpan, columnOffset } = props;

  return (
    <div
      className={cx('iui-layouts-grid-item', className)}
      style={{
        // Column span values
        ...styleKeysValues(
          '--_iui-grid-item-column-span-smobile',
          columnSpan?.smallMobile,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-span-mobile',
          columnSpan?.mobile,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-span-tablet',
          columnSpan?.tablet,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-span-smonitor',
          columnSpan?.smallMonitor,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-span-lmonitor',
          columnSpan?.largeMonitor,
        ),
        // Column offset value
        ...styleKeysValues(
          '--_iui-grid-item-column-start-smobile',
          columnOffset?.smallMobile,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-start-mobile',
          columnOffset?.mobile,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-start-tablet',
          columnOffset?.tablet,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-start-smonitor',
          columnOffset?.smallMonitor,
        ),
        ...styleKeysValues(
          '--_iui-grid-item-column-start-lmonitor',
          columnOffset?.largeMonitor,
        ),
        // User styles
        ...style,
      }}
    >
      {children}
    </div>
  );
};

GridItem.displayName = 'GridItem';

export default GridItem;
