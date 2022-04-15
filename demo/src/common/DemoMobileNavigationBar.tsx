import React from 'react';
import {
  SvgConfiguration,
  SvgFolder,
  SvgHome,
  SvgModel,
} from '@itwin/itwinui-icons-react';
import { useNavigate } from 'react-router-dom';
import './DemoMobileNavigationBar.scss';

const DemoNavigationBarItem = (props: {
  icon: JSX.Element;
  title: string;
  isActive?: boolean;
  url: string;
}) => {
  const { icon, title, isActive, url } = props;
  const navigate = useNavigate();
  return (
    <div
      className={
        isActive
          ? 'demo-mobile-navigation-bar-item active'
          : 'demo-mobile-navigation-bar-item'
      }
      key={title}
      onClick={() => navigate(url)}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

const DemoMobileNavigationBar = ({ activeItem = 'Browse' }) => {
  return (
    <div className='demo-mobile-navigation-bar'>
      <DemoNavigationBarItem
        title='Home'
        icon={<SvgHome />}
        url='/'
        isActive={activeItem === 'Home'}
      />
      <DemoNavigationBarItem
        title='Model'
        icon={<SvgModel />}
        url='/app-layout'
        isActive={activeItem === 'Model'}
      />
      <DemoNavigationBarItem
        title='Browse'
        icon={<SvgFolder />}
        url='/grid-layout7'
        isActive={activeItem === 'Browse'}
      />
      <DemoNavigationBarItem
        title='Configuration'
        icon={<SvgConfiguration />}
        url='/'
        isActive={activeItem === 'Configuration'}
      />
    </div>
  );
};

export default DemoMobileNavigationBar;
