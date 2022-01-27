import React from 'react';

export type SideNavigationProps = {
  children: React.ReactNode;
};

export const SideNavigation = (props: SideNavigationProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-sidenav'>{children}</div>;
};

export default SideNavigation;
