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

const Left = (props: LeftProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-bottom-bar-action-bar-left', className)}
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

const Center = (props: CenterProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-bottom-bar-action-bar-center', className)}
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

const Right = (props: RightProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-bottom-bar-action-bar-right', className)}
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
    <div
      className={cx('iui-layouts-page-bottom-bar-action-bar', className)}
      style={style}
    >
      {children}
    </div>
  );
};

ActionBar.displayName = 'PageLayout.ActionBar';
ActionBar.Left = Left;
ActionBar.Center = Center;
ActionBar.Right = Right;

export default ActionBar;
