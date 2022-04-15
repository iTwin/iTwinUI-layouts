import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DemoMobileNavigationBar.scss';

export type DemoMobileNavigationBarProps = {
  items: {
    icon: JSX.Element;
    title: string;
    isActive?: boolean;
    url: string;
  }[];
};

const DemoMobileNavigationBar = (props: DemoMobileNavigationBarProps) => {
  const { items } = props;
  const navigate = useNavigate();
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
            onClick={() => navigate(item.url)}
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
