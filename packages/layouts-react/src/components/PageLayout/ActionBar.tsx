/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';
import Left from './Left';
import Center from './Center';
import Right from './Right';

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
      {/* {leftPart && <div className='bottom-bar-action-bar-left'>{leftPart}</div>}
      {middlePart && (
        <div className='bottom-bar-action-bar-middle'>{middlePart}</div>
      )}
      {rightPart && (
        <div className='bottom-bar-action-bar-right'>{rightPart}</div>
      )} */}
      {children}
    </div>
  );
};

ActionBar.displayName = 'PageLayout.ActionBar';
ActionBar.Left = Left;
ActionBar.Center = Center;
ActionBar.Right = Right;

export default ActionBar;
