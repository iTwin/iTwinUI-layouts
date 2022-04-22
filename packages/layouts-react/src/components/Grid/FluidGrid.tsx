/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type FluidGridProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  /**
   * Minimum grid item width.
   * default: 256
   */
  minItemWidth?: number;
} & StylingProps;

/**
 * Fluid grid automatically positions children to screen width.
 * Children count per row calculation is based on `minItemWidth` which by default is 256px.
 */
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

FluidGrid.displayName = 'FluidGrid';

export default FluidGrid;
