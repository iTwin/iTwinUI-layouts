/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type GridProps = {
  children: React.ReactNode;
};

export const Grid = (props: GridProps) => {
  const { children } = props;
  return <div className='iui-layouts-grid'>{children}</div>;
};

Grid.displayName = 'Grid';

export default Grid;

// add grid item (hight and width props)
// expose breakpoints
//
