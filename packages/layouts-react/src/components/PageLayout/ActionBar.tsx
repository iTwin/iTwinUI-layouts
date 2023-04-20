/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type ActionBarProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  /**
   * Left side of button bar
   */
  leftPart?: React.ReactNode;
  /**
   * Middle part of button bar
   */
  middlePart?: React.ReactNode;
  /**
   * Right side of button bar
   */
  rightPart?: React.ReactNode;
} & StylingProps;

export const ActionBar = (props: ActionBarProps) => {
  const { className, style, children, leftPart, middlePart, rightPart } = props;
  return (
    <div
      className={cx('iui-layouts-page-content-action-bar', className)}
      style={style}
    >
      {leftPart && <div className='action-bar-left'>{leftPart}</div>}
      {middlePart && <div className='action-bar-middle'>{middlePart}</div>}
      {rightPart && <div className='action-bar-right'>{rightPart}</div>}
      {children}
    </div>
  );
};

ActionBar.displayName = 'PageLayout.ActionBar';

export default ActionBar;
