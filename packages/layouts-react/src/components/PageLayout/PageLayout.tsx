/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import Content from './Content';
import { Header } from './Header';
import SideNavigation from './SideNavigation';

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type PageLayoutType = (props: PageLayoutProps) => JSX.Element & {
  Header: typeof Header;
  SideNavigation: typeof SideNavigation;
  Content: typeof Content;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div className='iui-layouts-page'>{children}</div>;
};

PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;

export default PageLayout;