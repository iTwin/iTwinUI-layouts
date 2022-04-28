/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils';
import { ResponsiveColumnSpan, ResponsiveColumnStart } from './types';

export type GridItemProps = {
  /**
   * Children of the element
   */
  children?: React.ReactNode;
  /**
   * Sets column count for grid item - how many columns this item spans.
   * Max columnSpan is 12.
   * @default 1
   */
  columnSpan?: number | ResponsiveColumnSpan;
  /**
   * Sets on which column grid item starts.
   * Eg. When set to 10, grid item starts on 10th column.
   * @default 'auto'
   */
  columnStart?: 'auto' | number | ResponsiveColumnStart;
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
  columnSpan: number | ResponsiveColumnSpan | undefined,
  accessor: keyof ResponsiveColumnSpan,
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
  columnOffset: 'auto' | number | ResponsiveColumnStart | undefined,
  accessor: keyof ResponsiveColumnStart,
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
 *    
 * @example
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
  const { className, style, children, columnSpan, columnStart } = props;

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
          columnOffsetTypeGuard(columnStart, 'mobile'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-landscape-mobile',
          columnOffsetTypeGuard(columnStart, 'landscapeMobile'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-tablet',
          columnOffsetTypeGuard(columnStart, 'tablet'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-small-monitor',
          columnOffsetTypeGuard(columnStart, 'smallMonitor'),
        ),
        ...columnProps(
          '--_iui-grid-item-column-start-monitor',
          columnOffsetTypeGuard(columnStart, 'monitor'),
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
