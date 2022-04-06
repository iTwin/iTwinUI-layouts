/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  SvgHome,
  SvgConfiguration,
  SvgModel,
  SvgFolder,
} from '@itwin/itwinui-icons-react';
import { SidenavButton, SideNavigation } from '@itwin/itwinui-react';
import { useNavigate } from 'react-router-dom';

export const DemoSideNav = ({ activeItemKey = 'Home' }) => {
  const navigate = useNavigate();
  return (
    <SideNavigation
      className='app-sidenav'
      expanderPlacement='bottom'
      items={[
        <SidenavButton
          startIcon={<SvgHome />}
          key='Home'
          isActive={activeItemKey === 'Home'}
        >
          Home
        </SidenavButton>,
        <SidenavButton
          startIcon={<SvgModel />}
          key='Model'
          isActive={activeItemKey === 'Model'}
          onClick={() => navigate('/app-layout')}
        >
          Model
        </SidenavButton>,
        <SidenavButton
          startIcon={<SvgFolder />}
          key='Browse'
          isActive={activeItemKey === 'Browse'}
          onClick={() => navigate('/grid-layout')}
        >
          Browse
        </SidenavButton>,
      ]}
      secondaryItems={[
        <SidenavButton startIcon={<SvgConfiguration />} key='configuration'>
          Configuration
        </SidenavButton>,
      ]}
    />
  );
};

export default DemoSideNav;
