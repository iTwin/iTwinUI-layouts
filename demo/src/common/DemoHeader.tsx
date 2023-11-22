/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import {
  Header,
  HeaderLogo,
  HeaderBreadcrumbs,
  HeaderButton,
  MenuDivider,
  MenuExtraContent,
  MenuItem,
  IconButton,
  DropdownMenu,
  Select,
  Text,
  Avatar,
} from '@itwin/itwinui-react';
import {
  SvgCheckmark,
  SvgModel,
  SvgNotification,
  SvgHelpCircular,
  SvgInfoCircular,
  SvgSmileyHappy,
  SvgSettings,
  SvgImodelHollow,
  SvgExit,
  SvgNews,
  SvgProject,
} from '@itwin/itwinui-icons-react';
import { useNavigate } from 'react-router-dom';

export type DemoHeaderProps = {
  isSlim?: boolean;
};

export const DemoHeader = ({ isSlim = false }: DemoHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Header
      isSlim={isSlim}
      appLogo={
        <HeaderLogo logo={<SvgImodelHollow />} onClick={() => navigate('/')}>
          iTwinUI-layouts
        </HeaderLogo>
      }
      breadcrumbs={
        <HeaderBreadcrumbs
          items={[
            <HeaderButton
              key='projectBreadcrumb'
              name='Project Alpha'
              description='0x0123456789'
              startIcon={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                  alt='Project thumbnail'
                  draggable='false'
                />
              }
              onClick={() => {}}
              menuItems={() => [
                <MenuItem
                  key='projectA'
                  sublabel='0x0123456789'
                  startIcon={
                    <img
                      src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                      alt='Project thumbnail'
                      draggable='false'
                    />
                  }
                  endIcon={<SvgCheckmark />}
                  isSelected
                >
                  Project Alpha
                </MenuItem>,
                <MenuItem
                  key='projectB'
                  sublabel='0x0987654321'
                  startIcon={<SvgProject />}
                >
                  Project Beta
                </MenuItem>,
                <MenuItem
                  key='projectC'
                  sublabel='0x0001337420'
                  startIcon={<SvgProject />}
                >
                  Project Charlie
                </MenuItem>,
                <MenuDivider key='divider' />,
                <MenuItem key='myProjects'>My projects</MenuItem>,
              ]}
            />,
            <HeaderButton
              key='iModelBreadcrumb'
              name='iModel Beta'
              description='0x0987654321'
              startIcon={<SvgModel />}
              onClick={() => {}}
              isActive
              menuItems={() => [
                <MenuItem
                  key='iModelA'
                  sublabel='0x0123456789'
                  startIcon={<SvgModel />}
                >
                  iModel Alpha
                </MenuItem>,
                <MenuItem
                  key='iModelB'
                  sublabel='0x0987654321'
                  startIcon={<SvgModel />}
                  isSelected
                  endIcon={<SvgCheckmark />}
                >
                  iModel Beta
                </MenuItem>,
                <MenuItem
                  key='iModelC'
                  sublabel='0x0001337420'
                  startIcon={<SvgModel />}
                >
                  iModel Charlie
                </MenuItem>,
                <MenuDivider key='divider' />,
                <MenuItem key='myiModels'>My iModels</MenuItem>,
              ]}
            />,
          ]}
        />
      }
      actions={[
        <IconButton key='notifications' styleType='borderless'>
          <SvgNotification />
        </IconButton>,
        <DropdownMenu
          key='help'
          menuItems={() => [
            <MenuItem key='getting-started'>Getting started</MenuItem>,
            <MenuItem key='report-a-problem'>Report a problem</MenuItem>,
            <MenuItem key='communities'>Communities</MenuItem>,
          ]}
        >
          <IconButton styleType='borderless'>
            <SvgHelpCircular />
          </IconButton>
        </DropdownMenu>,
        <DropdownMenu
          key='profile'
          role='menu'
          menuItems={() => [
            <MenuExtraContent key={0}>
              <>
                <Text variant='leading'>Terry Rivers</Text>
                <Text isMuted style={{ marginBottom: 8 }}>
                  terry.rivers@email.com
                </Text>
                <Select
                  options={[
                    { value: 'User', label: 'User' },
                    { value: 'Moderator', label: 'Moderator' },
                    { value: 'Administrator', label: 'Administrator' },
                  ]}
                  value={'Administrator'}
                />
              </>
            </MenuExtraContent>,
            <MenuDivider key={1} />,
            <MenuItem key='view-profile'>View profile</MenuItem>,
            <MenuItem key='sign-out' endIcon={<SvgExit />}>
              Sign out
            </MenuItem>,
          ]}
        >
          <IconButton styleType='borderless'>
            <Avatar
              size='medium'
              image={
                <img
                  src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png'
                  alt='Terry Rivers'
                />
              }
            />
          </IconButton>
        </DropdownMenu>,
      ]}
      menuItems={() => [
        <MenuItem key='settings' startIcon={<SvgSettings />}>
          Settings
        </MenuItem>,
        <MenuItem key='feedback' startIcon={<SvgSmileyHappy />}>
          Feedback
        </MenuItem>,
        <MenuItem key='whats-new' startIcon={<SvgNews />}>
          {`What's new`}
        </MenuItem>,
        <MenuItem key='about' startIcon={<SvgInfoCircular />}>
          About
        </MenuItem>,
      ]}
    />
  );
};

export default DemoHeader;
