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
} & StylingProps;

export const ActionBar = (props: ActionBarProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-content-action-bar', className)}
      style={style}
    >
      {children}
    </div>
  );
};

ActionBar.displayName = 'PageLayout.ActionBar';

export default ActionBar;
