/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { Text } from '@itwin/itwinui-react';
import './DemoSurfaceCard.scss';

type DemoSurfaceCardProps = {
  children: React.ReactNode;
  title: string;
  centeredContent?: boolean;
};

export const DemoSurfaceCard = (props: DemoSurfaceCardProps) => {
  const { children, title, centeredContent = false } = props;

  return (
    <div className='demo-surface-card'>
      <div className='demo-surface-title-bar'>
        <Text variant='subheading'>{title}</Text>
      </div>
      <div
        className={cx('demo-surface-content', {
          'demo-surface-content-centered': centeredContent,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default DemoSurfaceCard;
