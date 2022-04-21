/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps, styleKeysValues } from '../../utils';
import { ScreenSizes } from './types';

export type GridProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  /**
   * Grid column count on different screen sizes.
   * @default {smallMobile:2,mobile:4,tablet:8,smallMonitor:8,largeMonitor:12}
   */
  columnCount?: ScreenSizes;
} & StylingProps;

export const Grid = (props: GridProps) => {
  const { className, style, children, columnCount } = props;

  return (
    <div
      className={cx('iui-layouts-grid', className)}
      style={
        {
          ...style,
          ...styleKeysValues(
            '--_iui-grid-column-count-smobile',
            columnCount?.smallMobile,
          ),
          ...styleKeysValues(
            '--_iui-grid-column-count-mobile',
            columnCount?.mobile,
          ),
          ...styleKeysValues(
            '--_iui-grid-column-count-tablet',
            columnCount?.tablet,
          ),
          ...styleKeysValues(
            '--_iui-grid-column-count-smonitor',
            columnCount?.smallMonitor,
          ),
          ...styleKeysValues(
            '--_iui-grid-column-count-lmonitor',
            columnCount?.largeMonitor,
          ),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Grid;
