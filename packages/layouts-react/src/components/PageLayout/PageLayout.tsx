/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import Content from './Content';
import ToolsArea from './ToolsArea';
import { Header } from './Header';
import SideNavigation from './SideNavigation';
import TitleArea from './TitleArea';
import DataArea from './DataArea';

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type PageLayoutType = (props: PageLayoutProps) => JSX.Element & {
  Header: typeof Header;
  SideNavigation: typeof SideNavigation;
  Content: typeof Content;
  ToolsArea: typeof ToolsArea;
  TitleArea: typeof TitleArea;
  DataArea: typeof DataArea;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div className='iui-layouts-page'>{children}</div>;
};

PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.ToolsArea = ToolsArea;
PageLayout.TitleArea = TitleArea;
PageLayout.DataArea = DataArea;

export default PageLayout;
