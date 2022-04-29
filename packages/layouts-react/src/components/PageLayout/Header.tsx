/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type HeaderProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;

export const Header = (props: HeaderProps) => {
  const { className, style, children } = props;
  return (
    <div className={cx('iui-layouts-page-header', className)} style={style}>
      {children}
    </div>
  );
};

Header.displayName = 'PageLayout.Header';

export default Header;
