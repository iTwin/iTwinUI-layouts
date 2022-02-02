/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SvgFlag, SvgHome, SvgSettings } from '@itwin/itwinui-icons-react';
import { SidenavButton, SideNavigation } from '@itwin/itwinui-react';

export const DemoSideNav = () => {
  return (
    <SideNavigation
      className='app-sidenav'
      expanderPlacement='bottom'
      items={[
        <SidenavButton startIcon={<SvgHome />} key='Home'>
          {'Home'}
        </SidenavButton>,
        <SidenavButton startIcon={<SvgFlag />} key='Manage Versions'>
          {'Manage Versions'}
        </SidenavButton>,
      ]}
      secondaryItems={[
        <SidenavButton startIcon={<SvgSettings />} key='settings'>
          Settings
        </SidenavButton>,
      ]}
    />
  );
};

export default DemoSideNav;
