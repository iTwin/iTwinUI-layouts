import React from 'react';
import {
  Header,
  HeaderLogo,
  HeaderBreadcrumbs,
  HeaderButton,
  MenuItem,
  UserIcon,
  IconButton,
} from '@itwin/itwinui-react';
import { ReactComponent as Logo } from './itwin.svg';
import { SvgNetwork } from '@itwin/itwinui-icons-react';

export const DemoHeader = () => {
  return (
    <Header
      appLogo={<HeaderLogo logo={<Logo />}>iTwin Services</HeaderLogo>}
      breadcrumbs={
        <HeaderBreadcrumbs
          items={[
            <HeaderButton
              key='projectBreadcrumb'
              menuItems={() => [
                <MenuItem key='projectA'>Project A</MenuItem>,
                <MenuItem key='projectB'>Project B</MenuItem>,
              ]}
              name='Project A'
              description='789879'
              startIcon={<SvgNetwork />}
            />,
            <HeaderButton
              key='iModelBreadcrumb'
              menuItems={() => [
                <MenuItem key='iModelA'>iModel A</MenuItem>,
                <MenuItem key='iModelB'>iModel B</MenuItem>,
              ]}
              name='iModel A'
              description='5456465'
              startIcon={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                  alt='Project thumbnail'
                />
              }
            />,
          ]}
        />
      }
      userIcon={
        <IconButton styleType='borderless'>
          <UserIcon
            size='medium'
            image={
              <img
                src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png'
                alt='User icon'
              />
            }
          />
        </IconButton>
      }
      menuItems={() => [
        <MenuItem key='moreoption1'>Menu item #1</MenuItem>,
        <MenuItem key='moreoption2'>Menu item #2</MenuItem>,
      ]}
    />
  );
};

export default DemoHeader;
