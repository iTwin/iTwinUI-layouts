/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type GridProps = {
  children: React.ReactNode;
} & StylingProps;

export const Grid = (props: GridProps) => {
  const { className, style, children } = props;
  return (
    <div className={cx('iui-layouts-grid', className)} style={style}>
      {children}
    </div>
  );
};

export default Grid;
