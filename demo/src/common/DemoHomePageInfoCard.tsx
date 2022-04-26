/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './DemoHomePageInfoCard.scss';

type DemoHomePageInfoCardProps = {
  icon: React.ReactNode;
  centerArea: React.ReactNode;
  rightArea: React.ReactNode;
};

export const DemoHomePageInfoCard = (props: DemoHomePageInfoCardProps) => {
  const { icon, centerArea, rightArea } = props;

  return (
    <div className='demo-home-page-info-card'>
      <div className='demo-home-page-info-card-icon'>{icon}</div>
      <div className='demo-home-page-info-card-center'>{centerArea}</div>
      <div className='demo-home-page-info-card-right'>{rightArea}</div>
    </div>
  );
};

export default DemoHomePageInfoCard;
