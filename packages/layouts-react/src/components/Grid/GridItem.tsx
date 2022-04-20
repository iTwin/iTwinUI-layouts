/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';
import { screenSizes } from './types';

export type GridItemProps = {
  /**
   * Children of the element
   */
  children?: React.ReactNode;
  /**
   * Column span for grid item
   * @default {smallMobile:1,mobile:1,tablet:1,smallMonitor:1,largeMonitor:1}
   */
  columnSpan?: screenSizes;
} & StylingProps;

export const GridItem = (props: GridItemProps) => {
  const {
    className,
    children,
    style,
    columnSpan = {
      smallMobile: 1,
      mobile: 1,
      tablet: 1,
      smallMonitor: 1,
      largeMonitor: 1,
    },
  } = props;

  return (
    <div
      className={cx('iui-layouts-grid-item', className)}
      style={
        {
          ...style,
          '--_iui-grid-item-column-span-smobile': `span ${columnSpan.smallMobile}`,
          '--_iui-grid-item-column-span-mobile': `span ${columnSpan.mobile}`,
          '--_iui-grid-item-column-span-tablet': `span ${columnSpan.tablet}`,
          '--_iui-grid-item-column-span-smonitor': `span ${columnSpan.smallMonitor}`,
          '--_iui-grid-item-column-span-lmonitor': `span ${columnSpan.largeMonitor}`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

GridItem.displayName = 'GridItem';

export default GridItem;
