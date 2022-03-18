/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type FluidGridProps = {
  children: React.ReactNode;
  /**
   * Minimum grid item width.
   * default: 288
   */
  minColumnWidth?: number;
};

export const FluidGrid = (props: FluidGridProps) => {
  const { children, minColumnWidth = 288 } = props;
  return (
    <div
      className='iui-layouts-fluid-grid'
      style={
        {
          '--_iui-grid-item-min-width': `${minColumnWidth}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default FluidGrid;
