/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentProps = {
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
  children: React.ReactNode;
  /**
   * Adds padding and max-width to content
   * @default false
   */
  padded?: boolean;
};

export const Content = (props: ContentProps) => {
  const { children, padded = false } = props;
  return padded ? (
    <div className='iui-layouts-page-content iui-layouts-page-content-padded'>
      <div className='iui-layouts-page-content-centered'>{children}</div>
    </div>
  ) : (
    <div className='iui-layouts-page-content'>{children}</div>
  );
};

Content.displayName = 'PageLayout.Content';

export default Content;
