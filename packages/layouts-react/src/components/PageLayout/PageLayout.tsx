/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';
import Content from './Content';
import ToolsArea from './ToolsArea';
import { Header } from './Header';
import SideNavigation from './SideNavigation';
import TitleArea from './TitleArea';
import BottomBar from './BottomBar';

export type PageLayoutProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

export const PageLayout = (props: PageLayoutProps) => {
  const { className, style, children } = props;
  return (
    <div className={cx('iui-layouts-page', className)} style={style}>
      {children}
    </div>
  );
};

PageLayout.Header = Header;
PageLayout.SideNavigation = SideNavigation;
PageLayout.Content = Content;
PageLayout.ToolsArea = ToolsArea;
PageLayout.TitleArea = TitleArea;
PageLayout.BottomBar = BottomBar;

export default PageLayout;
