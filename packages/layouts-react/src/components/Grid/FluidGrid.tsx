/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { CommonProps } from '../../utils/props';

export type FluidGridProps = {
  /**
   * Minimum grid item width.
   * default: 256
   */
  minItemWidth?: number;
} & CommonProps;

export const FluidGrid = (props: FluidGridProps) => {
  const { className, style, children, minItemWidth = 256 } = props;
  return (
    <div
      className={cx('iui-layouts-fluid-grid', className)}
      style={
        {
          ...style,
          '--_iui-grid-item-min-width': `${minItemWidth}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FluidGrid;
