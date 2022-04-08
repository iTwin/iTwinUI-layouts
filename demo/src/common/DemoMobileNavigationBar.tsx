import React from 'react';
import './DemoMobileNavigationBar.scss';

export type DemoMobileNavigationBarProps = {
  items: { icon: JSX.Element; title: string; isActive?: boolean }[];
};

const DemoMobileNavigationBar = (props: DemoMobileNavigationBarProps) => {
  const { items } = props;
  return (
    <div className='demo-mobile-navigation-bar'>
      {items.map((item) => {
        return (
          <div
            className={
              item.isActive
                ? 'demo-mobile-navigation-bar-item active'
                : 'demo-mobile-navigation-bar-item'
            }
            key={item.title}
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DemoMobileNavigationBar;
