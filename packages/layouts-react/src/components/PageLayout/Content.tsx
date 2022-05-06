/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type ContentProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
  /**
   * Adds padding and max-width to content
   * @default false
   */
  padded?: boolean;
} & StylingProps;

export const Content = (props: ContentProps) => {
  const { className, style, children, padded = false } = props;
  return padded ? (
    <div
      className={cx(
        'iui-layouts-page-content iui-layouts-page-content-padded',
        className,
      )}
      style={style}
    >
      <div className='iui-layouts-page-content-centered'>{children}</div>
    </div>
  ) : (
    <div className={cx('iui-layouts-page-content', className)} style={style}>
      {children}
    </div>
  );
};

Content.displayName = 'PageLayout.Content';

export default Content;
