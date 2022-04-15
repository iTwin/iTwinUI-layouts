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
  SvgFeedback,
  SvgChat,
  SvgUser,
} from '@itwin/itwinui-icons-react';
import './DemoHeader.scss';
import DemoMobileHeaderMenuItem from './DemoMobileMenuItem';
import { useMobile } from './useMobile';
import { useNavigate } from 'react-router-dom';

const projectsMenuContent = (
  <ul style={{ listStyle: 'none', padding: 0 }}>
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
    </MenuItem>
    <MenuItem key='projectB' sublabel='0x0987654321' icon={<SvgProject />}>
      Project Beta
    </MenuItem>
    <MenuItem key='projectC' sublabel='0x0001337420' icon={<SvgProject />}>
      Project Charlie
    </MenuItem>
    <MenuDivider key='divider' />
    <MenuItem key='myProjects'>My projects</MenuItem>
  </ul>
);

const iModelsMenuContent = (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <MenuItem key='iModelA' sublabel='0x0123456789' icon={<SvgModel />}>
      iModel Alpha
    </MenuItem>
    <MenuItem
      key='iModelB'
      sublabel='0x0987654321'
      icon={<SvgModel />}
      isSelected
      badge={<SvgCheckmark />}
    >
      iModel Beta
    </MenuItem>
    <MenuItem key='iModelC' sublabel='0x0001337420' icon={<SvgModel />}>
      iModel Charlie
    </MenuItem>
    <MenuDivider key='divider' />
    <MenuItem key='myiModels'>My iModels</MenuItem>
  </ul>
);
const helpMenuContent = (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <MenuItem key='getting-started' icon={<SvgHelpCircular />}>
      Getting started
    </MenuItem>
    <MenuItem key='report-a-problem' icon={<SvgFeedback />}>
      Report a problem
    </MenuItem>
    <MenuItem key='communities' icon={<SvgChat />}>
      Communities
    </MenuItem>
  </ul>
);

export type DemoHeaderProps = {
  isSlim?: boolean;
};

export const DemoHeader = ({ isSlim = false }: DemoHeaderProps) => {
  const isMobile = useMobile();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [secondaryMenuContent, setSecondaryMenuContent] =
    React.useState<JSX.Element | null>(null);

  return (
    <>
      {isMobile && (
        <>
          {isMenuOpen && <div className='mobile-menu-overlay' />}
          <InformationPanel
            isOpen={isMenuOpen}
            style={{ position: 'fixed', overflow: 'hidden', height: '100vh' }}
          >
            <InformationPanelHeader onClose={() => setIsMenuOpen(false)}>
              {!!secondaryMenuContent && (
                <>
                  <IconButton
                    styleType='borderless'
                    onClick={() => setSecondaryMenuContent(null)}
                    style={{ marginRight: 12, flexShrink: 0 }}
                  >
                    <SvgChevronLeft />
                  </IconButton>
                  <Text variant='leading'>Project selection</Text>
                </>
              )}

              {!secondaryMenuContent && (
                <>
                  <SvgImodelHollow
                    style={{ marginLeft: 12, marginRight: 24, flexShrink: 0 }}
                  />
                  <Text variant='leading'>iTwin Services</Text>
                </>
              )}
            </InformationPanelHeader>
            <div
              style={{
                width: '200%',
                display: 'flex',
                transform: !!secondaryMenuContent
                  ? 'translate(-50%)'
                  : undefined,
                transition: 'transform 0.2s ease-out, opacity 0.2s ease',
                overflow: 'auto',
              }}
            >
              <InformationPanelBody style={{ width: '50%' }}>
                {!secondaryMenuContent && (
                  <>
                    <DemoMobileHeaderMenuItem
                      startIcon={
                        <img
                          src='https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png'
                          alt='Terry Rivers'
                        />
                      }
                      title='Terry Rivers'
                      description='terry.rivers@email.com'
                    />
                    <hr />
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
                      onChevronClick={() =>
                        setSecondaryMenuContent(projectsMenuContent)
                      }
                    />
                    <DemoMobileHeaderMenuItem
                      startIcon={<SvgModel />}
                      title='iModel Beta'
                      description='0x0987654321'
                      showChevron
                      onChevronClick={() =>
                        setSecondaryMenuContent(iModelsMenuContent)
                      }
                    />
                    <hr />
                    <DemoMobileHeaderMenuItem
                      title='Settings'
                      startIcon={<SvgSettings />}
                    />
                    <DemoMobileHeaderMenuItem
                      title='Feedback'
                      startIcon={<SvgSmileyHappy />}
                    />
                    <DemoMobileHeaderMenuItem
                      title={`What's new`}
                      startIcon={<SvgNews />}
                    />
                    <DemoMobileHeaderMenuItem
                      title='About'
                      startIcon={<SvgInfoCircular />}
                    />
                    <hr />
                    <DemoMobileHeaderMenuItem
                      title='Help'
                      startIcon={<SvgHelpCircular />}
                      showChevron
                      onChevronClick={() =>
                        setSecondaryMenuContent(helpMenuContent)
                      }
                    />
                    <DemoMobileHeaderMenuItem
                      title='Notifications'
                      startIcon={<SvgNotification />}
                    />
                    <hr />
                    <DemoMobileHeaderMenuItem
                      title='Log out'
                      startIcon={<SvgExit />}
                    />
                  </>
                )}
              </InformationPanelBody>
              <InformationPanelBody
                style={{
                  width: '50%',
                }}
              >
                {secondaryMenuContent}
              </InformationPanelBody>
            </div>
          </InformationPanel>
        </>
      )}
      <Header
        isSlim={isSlim}
        appLogo={
          <HeaderLogo logo={<SvgImodelHollow />} onClick={() => navigate('/')}>
            iTwin Services
          </HeaderLogo>
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
