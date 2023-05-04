/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

// ----------------------------------------------------------------------------
// ActionBar.Left component
export type LeftProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Left subcomponent of ActionBar that displays content in the left slot
 */
const Left = (props: LeftProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-action-bar-left', className)}
      style={style}
    >
      {children}
    </div>
  );
};

Left.displayName = 'ActionBar.Left';

// ----------------------------------------------------------------------------
// ActionBar.Center component
export type CenterProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Center subcomponent of ActionBar that displays content in the middle slot
 */
const Center = (props: CenterProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-action-bar-center', className)}
      style={style}
    >
      {children}
    </div>
  );
};

Center.displayName = 'ActionBar.Center';

// ----------------------------------------------------------------------------
// ActionBar.Right component
export type RightProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

/**
 * Right subcomponent of ActionBar that displays content in the right slot
 */
const Right = (props: RightProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-action-bar-right', className)}
      style={style}
    >
      {children}
    </div>
  );
};

Right.displayName = 'ActionBar.Right';

export type ActionBarProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

export const ActionBar = (props: ActionBarProps) => {
  const { className, style, children } = props;
  return (
    <div className={cx('iui-layouts-page-action-bar', className)} style={style}>
      {children}
    </div>
  );
};

/**
 * Left subcomponent of ActionBar that displays content in the left slot
 */
ActionBar.Left = Left;
/**
 * Center subcomponent of ActionBar that displays content in the middle slot
 */
ActionBar.Center = Center;
/**
 * Right subcomponent of ActionBar that displays content in the right slot
 */
ActionBar.Right = Right;

export default ActionBar;
