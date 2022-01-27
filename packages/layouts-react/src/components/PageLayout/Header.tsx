import React from 'react';

export type HeaderProps = {
  children: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-header'>{children}</div>;
};

export default Header;
