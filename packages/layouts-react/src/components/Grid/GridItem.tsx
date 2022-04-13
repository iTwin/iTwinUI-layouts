/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';

export type GridItemProps = {
  children?: React.ReactNode;
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
  /**
   *
   */
  gridColumnSpan?: 'full' | number;
};

export const GridItem = (props: GridItemProps) => {
  const { children, style, gridColumnSpan = 2 } = props;
  return (
    <div
      className={cx('iui-layouts-grid-item')}
      style={
        {
          style,
          '--_iui-grid-item-column-span': `${
            gridColumnSpan === 'full' ? '1 / -1' : `span ${gridColumnSpan}`
          }`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

GridItem.displayName = 'GridItem';

export default GridItem;
