/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';
import { screenSizes } from './types';

export type GridProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  /**
   * Grid column count on different screen sizes.
   * @default {smallMobile:2,mobile:4,tablet:8,smallMonitor:8,largeMonitor:12}
   */
  columnCount?: screenSizes;
} & StylingProps;

export const Grid = (props: GridProps) => {
  const {
    className,
    style,
    children,
    columnCount = {
      smallMobile: 2,
      mobile: 4,
      tablet: 8,
      smallMonitor: 8,
      largeMonitor: 12,
    },
  } = props;
  return (
    <div
      className={cx('iui-layouts-grid', className)}
      style={
        {
          ...style,
          '--_iui-grid-column-count-smobile': `${columnCount.smallMobile}`,
          '--_iui-grid-column-count-mobile': `${columnCount.mobile}`,
          '--_iui-grid-column-count-tablet': `${columnCount.tablet}`,
          '--_iui-grid-column-count-smonitor': `${columnCount.smallMonitor}`,
          '--_iui-grid-column-count-lmonitor': `${columnCount.largeMonitor}`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
