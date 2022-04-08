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
  UserIcon,
  IconButton,
  DropdownMenu,
  Select,
  Text,
  InformationPanel,
  InformationPanelBody,
  InformationPanelContent,
  InformationPanelHeader,
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
  SvgMenu,
  SvgChevronLeft,
  SvgHome,
  SvgConfiguration,
} from '@itwin/itwinui-icons-react';
import './DemoHeader.scss';
import DemoMobileHeaderMenuItem from './DemoMobileMenuItem';
import DemoPopupMenu from './DemoPopupMenu';
import { useMobile } from './useMobile';

export const DemoHeader = () => {
  const isMobile = useMobile();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = React.useState(false);
  const secondaryMenuContent = (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <MenuItem
        key='projectA'
        sublabel='0x0123456789'
        icon={
          <img
            src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
            alt='Project thumbnail'
            draggable='false'
          />
        }
        badge={<SvgCheckmark />}
        isSelected
        onClick={() => setIsSecondaryMenuOpen(false)}
      >
        Project Alpha
      </MenuItem>
      <MenuItem
        key='projectB'
        sublabel='0x0987654321'
        icon={<SvgProject />}
        onClick={() => setIsSecondaryMenuOpen(false)}
      >
        Project Beta
      </MenuItem>
      <MenuItem
        key='projectC'
        sublabel='0x0001337420'
        icon={<SvgProject />}
        onClick={() => setIsSecondaryMenuOpen(false)}
      >
        Project Charlie
      </MenuItem>
      <MenuDivider key='divider' />
      <MenuItem key='myProjects' onClick={() => setIsSecondaryMenuOpen(false)}>
        My projects
      </MenuItem>
    </ul>
  );

  return (
    <>
      {isMobile && (
        <>
          <DemoPopupMenu
            isOpen={isSecondaryMenuOpen}
            onClose={() => setIsSecondaryMenuOpen(false)}
          >
            {secondaryMenuContent}
          </DemoPopupMenu>
          {isMenuOpen && <div className='mobile-menu-overlay' />}
          <InformationPanel isOpen={isMenuOpen}>
            <InformationPanelHeader onClose={() => setIsMenuOpen(false)}>
              <SvgImodelHollow style={{ marginLeft: 12, marginRight: 24 }} />
              <Text variant='subheading'>iTwin Services</Text>
            </InformationPanelHeader>
            <InformationPanelBody>
              <DemoMobileHeaderMenuItem
                startIcon={
                  <img
                    src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                    alt='Project thumbnail'
                    draggable='false'
                  />
                }
                title='Project Alpha'
                description='0x0123456789'
                showChevron
                onChevronClick={() => setIsSecondaryMenuOpen(true)}
              />
              <hr />
              <DemoMobileHeaderMenuItem
                startIcon={<SvgModel />}
                title='iModel Beta'
                description='0x0987654321'
                showChevron
                onChevronClick={() => setIsSecondaryMenuOpen(true)}
              />
              <hr />
              <DemoMobileHeaderMenuItem startIcon={<SvgHome />} title='Home' />
              <hr />
              <DemoMobileHeaderMenuItem
                startIcon={<SvgModel />}
                title='Model'
                isActive
              />
              <hr />
              <DemoMobileHeaderMenuItem
                startIcon={<SvgConfiguration />}
                title='Configuration'
              />
              <hr />
              <DemoMobileHeaderMenuItem
                title='Settings'
                startIcon={<SvgSettings />}
              />
              <hr />
              <DemoMobileHeaderMenuItem
                title='Feedback'
                startIcon={<SvgSmileyHappy />}
              />
              <hr />
              <DemoMobileHeaderMenuItem
                title={`What's new`}
                startIcon={<SvgNews />}
              />
              <hr />
              <DemoMobileHeaderMenuItem
                title='About'
                startIcon={<SvgInfoCircular />}
              />
              <hr />
            </InformationPanelBody>
          </InformationPanel>
        </>
      )}
      <Header
        appLogo={
          <HeaderLogo logo={<SvgImodelHollow />}>iTwin Services</HeaderLogo>
        }
        breadcrumbs={
          <>
            {!isMobile && (
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
                        icon={
                          <img
                            src='https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png'
                            alt='Project thumbnail'
                            draggable='false'
                          />
                        }
                        badge={<SvgCheckmark />}
                        isSelected
                      >
                        Project Alpha
                      </MenuItem>,
                      <MenuItem
                        key='projectB'
                        sublabel='0x0987654321'
                        icon={<SvgProject />}
                      >
                        Project Beta
                      </MenuItem>,
                      <MenuItem
                        key='projectC'
                        sublabel='0x0001337420'
                        icon={<SvgProject />}
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
                        icon={<SvgModel />}
                      >
                        iModel Alpha
                      </MenuItem>,
                      <MenuItem
                        key='iModelB'
                        sublabel='0x0987654321'
                        icon={<SvgModel />}
                        isSelected
                        badge={<SvgCheckmark />}
                      >
                        iModel Beta
                      </MenuItem>,
                      <MenuItem
                        key='iModelC'
                        sublabel='0x0001337420'
                        icon={<SvgModel />}
                      >
                        iModel Charlie
                      </MenuItem>,
                      <MenuDivider key='divider' />,
                      <MenuItem key='myiModels'>My iModels</MenuItem>,
                    ]}
                  />,
                ]}
              />
            )}
          </>
        }
        actions={
          isMobile
            ? [
                <IconButton key='notifications' styleType='borderless'>
                  <SvgNotification />
                </IconButton>,
                <DropdownMenu
                  key='help'
                  menuItems={() => [
                    <MenuItem key='getting-started'>Getting started</MenuItem>,
                    <MenuItem key='report-a-problem'>
                      Report a problem
                    </MenuItem>,
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
                    <MenuItem key='sign-out' badge={<SvgExit />}>
                      Sign out
                    </MenuItem>,
                  ]}
                >
                  <IconButton styleType='borderless'>
                    <UserIcon
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
                <IconButton
                  key='menu'
                  styleType='borderless'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <SvgMenu />
                </IconButton>,
              ]
            : [
                <IconButton key='notifications' styleType='borderless'>
                  <SvgNotification />
                </IconButton>,
                <DropdownMenu
                  key='help'
                  menuItems={() => [
                    <MenuItem key='getting-started'>Getting started</MenuItem>,
                    <MenuItem key='report-a-problem'>
                      Report a problem
                    </MenuItem>,
                    <MenuItem key='communities'>Communities</MenuItem>,
                  ]}
                >
                  <IconButton styleType='borderless'>
                    <SvgHelpCircular />
                  </IconButton>
                </DropdownMenu>,
              ]
        }
        userIcon={
          <>
            {!isMobile && (
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
                  <MenuItem key='sign-out' badge={<SvgExit />}>
                    Sign out
                  </MenuItem>,
                ]}
              >
                <IconButton styleType='borderless'>
                  <UserIcon
                    size='medium'
                    image={
                      <img
                        src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png'
                        alt='Terry Rivers'
                      />
                    }
                  />
                </IconButton>
              </DropdownMenu>
            )}
          </>
        }
        menuItems={
          isMobile
            ? undefined
            : () => [
                <MenuItem key='settings' icon={<SvgSettings />}>
                  Settings
                </MenuItem>,
                <MenuItem key='feedback' icon={<SvgSmileyHappy />}>
                  Feedback
                </MenuItem>,
                <MenuItem key='whats-new' icon={<SvgNews />}>
                  {`What's new`}
                </MenuItem>,
                <MenuItem key='about' icon={<SvgInfoCircular />}>
                  About
                </MenuItem>,
              ]
        }
      />
    </>
  );
};

export default DemoHeader;
