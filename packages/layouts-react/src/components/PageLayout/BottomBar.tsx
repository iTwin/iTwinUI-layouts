/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type BottomBarProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

export const BottomBar = (props: BottomBarProps) => {
  const { className, style, children = false } = props;
  return (
    <div className={cx('iui-layouts-page-bottom-bar', className)} style={style}>
      {children}
    </div>
  );
};

BottomBar.displayName = 'PageLayout.BottomBar';

export default BottomBar;
