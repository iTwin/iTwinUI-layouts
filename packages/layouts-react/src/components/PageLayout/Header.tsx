/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-header'>{children}</div>;
};

Header.displayName = 'PageLayout.Header';

export default Header;
