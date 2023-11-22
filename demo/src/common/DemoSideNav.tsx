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

export const DemoSideNav = ({ activeItemKey = 'Home' }) => {
  return (
    <SideNavigation
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
        >
          Model
        </SidenavButton>,
        <SidenavButton
          startIcon={<SvgFolder />}
          key='Browse'
          isActive={activeItemKey === 'Browse'}
        >
          Browse
        </SidenavButton>,
      ]}
      secondaryItems={[
        <SidenavButton startIcon={<SvgConfiguration />} key='configuration'>
          Configuration
        </SidenavButton>,
      ]}
      wrapperProps={{
        className: 'app-sidenav',
      }}
    />
  );
};

export default DemoSideNav;
