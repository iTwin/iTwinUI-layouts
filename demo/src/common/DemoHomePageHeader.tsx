/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import './DemoHomePageHeader.scss';

type DemoHomePageHeaderProps = {
  icon: React.ReactNode;
  centerArea: React.ReactNode;
  rightArea: React.ReactNode;
};

export const DemoHomePageHeader = (props: DemoHomePageHeaderProps) => {
  const { icon, centerArea, rightArea } = props;

  return (
    <div className='demo-home-page-header'>
      <div className='demo-home-page-header-icon'>{icon}</div>
      <div className='demo-home-page-header-center'>{centerArea}</div>
      <div className='demo-home-page-header-right'>{rightArea}</div>
    </div>
  );
};

export default DemoHomePageHeader;
