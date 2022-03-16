/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import Content from './Content';
import { Header } from './Header';
import SideNavigation from './SideNavigation';
import PaddedContent from './PaddedContent';
import TitleArea from './TitleArea';

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type PageLayoutType = (props: PageLayoutProps) => JSX.Element & {
  Header: typeof Header;
  SideNavigation: typeof SideNavigation;
  Content: typeof Content;
  PaddedContent: typeof PaddedContent;
  TitleArea: typeof TitleArea;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div className='iui-layouts-page'>{children}</div>;
};

PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.PaddedContent = PaddedContent;
PageLayout.TitleArea = TitleArea;

export default PageLayout;
