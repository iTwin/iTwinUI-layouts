/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import Content from './Content';
import { Header } from './Header';
import { Grid } from './Grid';
import SideNavigation from './SideNavigation';
import PaddedContent from './PaddedContent';

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type PageLayoutType = (props: PageLayoutProps) => JSX.Element & {
  Header: typeof Header;
  SideNavigation: typeof SideNavigation;
  Content: typeof Content;
  Grid: typeof Grid;
  PaddedContent: typeof PaddedContent;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div className='iui-layouts-page'>{children}</div>;
};

PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.Grid = Grid;
PageLayout.PaddedContent = PaddedContent;

export default PageLayout;
