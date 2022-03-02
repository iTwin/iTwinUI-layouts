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
};

export const Content = (props: ContentProps) => {
  const { children, style } = props;
  return (
    <div className='iui-layouts-page-content' style={style}>
      {children}
    </div>
  );
};

Content.displayName = 'PageLayout.Content';

export default Content;
