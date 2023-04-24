/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type CenterProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

export const Center = (props: CenterProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-bottom-bar-action-bar-center', className)}
      style={style}
    >
      {children}
    </div>
  );
};

Center.displayName = 'ActionBar.Center';

export default Center;
