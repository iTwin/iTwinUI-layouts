/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { Text } from '@itwin/itwinui-react';
import './DemoSurfaceCard.scss';

type DemoSurfaceCardProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  title: string;
};

export const DemoSurfaceCard = (props: DemoSurfaceCardProps) => {
  const { children, title } = props;

  return (
    <div className='demo-surface-card'>
      <div className='demo-surface-title-bar'>
        <Text variant='subheading'>{title}</Text>
      </div>
      <div className='demo-surface-content'>{children}</div>
    </div>
  );
};

export default DemoSurfaceCard;
