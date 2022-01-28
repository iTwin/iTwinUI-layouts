/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type SideNavigationProps = {
  children: React.ReactNode;
};

export const SideNavigation = (props: SideNavigationProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-sidenav'>{children}</div>;
};

SideNavigation.displayName = 'PageLayout.SideNavigation';

export default SideNavigation;
