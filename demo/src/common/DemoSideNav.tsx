/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { SvgMap, SvgHome, SvgConfiguration } from '@itwin/itwinui-icons-react';
import { SidenavButton, SideNavigation } from '@itwin/itwinui-react';

export const DemoSideNav = () => {
  return (
    <SideNavigation
      className='app-sidenav'
      expanderPlacement='bottom'
      items={[
        <SidenavButton startIcon={<SvgHome />} key='Home'>
          Home
        </SidenavButton>,
        <SidenavButton startIcon={<SvgMap />} key='Map' isActive>
          Map
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
