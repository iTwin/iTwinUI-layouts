/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
  padded?: boolean;
};

export const Content = (props: ContentProps) => {
  const { children, padded } = props;
  return padded ? (
    <div className='iui-layouts-content iui-layouts-content-padded'>
      <div className='iui-layouts-content-centered'>{children}</div>
    </div>
  ) : (
    <div className='iui-layouts-content'>{children}</div>
  );
};

Content.displayName = 'PageLayout.Content';

export default Content;
