/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils';
import { GridItem } from './GridItem';

export type GridProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Grid component based on CSS grid.
 * Grid has 12 columns across all screen breakpoints to keep consistent layouts.
 * Recommended to use `Grid.Item` components as children but can take any `ReactNode` component.
 *
 * @example
 *
 * <Grid>
 *   <Grid.Item />
 *   <Grid.Item columnSpan={6}/>
 *   <Grid.Item columnSpan={5}/>
 * </Grid>
 */
export const Grid = (props: GridProps) => {
  const { className, style, children } = props;

  return (
    <div className={cx('iui-layouts-grid', className)} style={style}>
      {children}
    </div>
  );
};

Grid.Item = GridItem;

export default Grid;
