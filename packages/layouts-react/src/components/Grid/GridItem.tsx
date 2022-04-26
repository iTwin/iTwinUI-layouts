/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils';
import { ScreenSizes, ScreenSizesOffset } from './types';

export type GridItemProps = {
  /**
   * Children of the element
   */
  children?: React.ReactNode;
  /**
   * Column span for grid item
   * @default 1
   */
  columnSpan?: number | ScreenSizes;
  /**
   * Column offset for grid item
   * @default 'auto'
   */
  columnOffset?: 'auto' | number | ScreenSizesOffset;
} & StylingProps;

const columnSpanProps = (key: string, value: number | undefined) => {
  if (value) {
    return {
      [key]: `span ${value}`,
    };
  }
  return undefined;
};

const columnProps = (key: string, value: number | string | undefined) => {
  if (value) {
    return {
      [key]: value,
    };
  }
  return undefined;
};

const columnSpanTypeGuard = (
  columnSpan: number | ScreenSizes | undefined,
  accessor: keyof ScreenSizes,
) => {
  if (typeof columnSpan === 'number') {
    return columnSpan;
  }
  if (columnSpan) {
    return columnSpan[accessor];
  }
  return undefined;
};

const columnOffsetTypeGuard = (
  columnOffset: 'auto' | number | ScreenSizesOffset | undefined,
  accessor: keyof ScreenSizesOffset,
) => {
  if (typeof columnOffset === 'number' || typeof columnOffset === 'string') {
    return columnOffset;
  }
  if (columnOffset) {
    return columnOffset[accessor];
  }
  return undefined;
};

/**
 * Grid item component to use with our `Grid`.
 * Default size is 1 column. You can change this by providing `columnSpan` prop.
 * Grid item starts at the next available position in grid. To change that provide `columnOffset` prop.
 *
 * @example
 * <GridItem
 *   columnSpan={12}
 * />
 * <GridItem
 *   columnSpan={{
                monitor: 8,
                smallMonitor: 6,
                tablet: 4,
                landscapeMobile: 12,
                mobile: 12,
              }}
 * />  
 * <GridItem
 *   columnSpan={4}
 *   columnOffset={2}
 * />
 * <GridItem
 *   columnSpan={4}
 *   columnOffset={{
                monitor: 2,
                smallMonitor: 2,
                tablet: 1,
                landscapeMobile: 'auto',
                mobile: 'auto',
              }}
 * />
 */
export const GridItem = (props: GridItemProps) => {
  const { className, style, children, columnSpan, columnOffset } = props;

  return (
    <div
      className={cx('iui-layouts-grid-item', className)}
      style={{
        // Column span values
        ...columnSpanProps(
          '--_iui-grid-item-column-span-mobile',
          columnSpanTypeGuard(columnSpan, 'mobile'),
        ),
        ...columnSpanProps(
          '--_iui-grid-item-column-span-landscape-mobile',
          columnSpanTypeGuard(columnSpan, 'landscapeMobile'),
        ),
        ...columnSpanProps(
          '--_iui-grid-item-column-span-tablet',
          columnSpanTypeGuard(columnSpan, 'tablet'),
        ),
        ...columnSpanProps(
          '--_iui-grid-item-column-span-small-monitor',
          columnSpanTypeGuard(columnSpan, 'smallMonitor'),
        ),
        ...columnSpanProps(
          '--_iui-grid-item-column-span-monitor',
          columnSpanTypeGuard(columnSpan, 'monitor'),
        ),
        // Column offset value
        ...columnProps(
          '--_iui-grid-item-column-start-mobile',
          columnOffsetTypeGuard(columnOffset, 'mobile'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-landscape-mobile',
          columnOffsetTypeGuard(columnOffset, 'landscapeMobile'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-tablet',
          columnOffsetTypeGuard(columnOffset, 'tablet'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-small-monitor',
          columnOffsetTypeGuard(columnOffset, 'smallMonitor'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-monitor',
          columnOffsetTypeGuard(columnOffset, 'monitor'),
        ),
        // User styles
        ...style,
      }}
    >
      {children}
    </div>
  );
};

GridItem.displayName = 'Grid.Item';

export default GridItem;
