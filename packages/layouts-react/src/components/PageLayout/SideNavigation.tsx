/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type SideNavigationProps = {
  children: React.ReactNode;
} & StylingProps;

export const SideNavigation = (props: SideNavigationProps) => {
  const { className, style, children } = props;
  return (
    <div className={cx('iui-layouts-page-sidenav', className)} style={style}>
      {children}
    </div>
  );
};

SideNavigation.displayName = 'PageLayout.SideNavigation';

export default SideNavigation;
