/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './DemoHomePageInfoCard.scss';
import { Surface, Text, UserIcon, UserIconGroup } from '@itwin/itwinui-react';
import { SvgImodelHollow } from '@itwin/itwinui-icons-react';

export const DemoHomePageInfoCard = () => {
  const userNames = [
    { name: 'Terry Rivers', abbreviation: 'TR', color: '#56AA1C' },
    { name: 'Kayla Smith', abbreviation: 'KS', color: '#2B9CA7' },
    { name: 'Celine Adams', abbreviation: 'CA', color: '#00426B' },
  ];

  return (
    <Surface elevation={1}>
      <div className='demo-home-page-info-card'>
        <div className='demo-home-page-info-card-icon'>
          <SvgImodelHollow />
        </div>
        <div className='demo-home-page-info-card-center'>
          <Text variant='title'>This is app title</Text>
          <Text variant='leading'>
            This subheading is the best. Giving description to the title of the
            app.
          </Text>
        </div>
        <div className='demo-home-page-info-card-right'>
          <UserIconGroup animated iconSize='medium'>
            {userNames.map((user, index) => (
              <UserIcon
                key={`user${index}`}
                title={user.name}
                abbreviation={user.abbreviation}
                backgroundColor={user.color}
              />
            ))}
          </UserIconGroup>
        </div>
      </div>{' '}
    </Surface>
  );
};

export default DemoHomePageInfoCard;
