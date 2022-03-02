/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { GridProps } from './Grid';

export const Grid2 = (props: GridProps) => {
  const { children } = props;
  return <div className='iui-layouts-grid2'>{children}</div>;
};

Grid2.displayName = 'PageLayout.Grid';

export default Grid2;
