/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
};

export const Content = (props: ContentProps) => {
  const { children } = props;
  return <div className='iui-layouts-content'>{children}</div>;
};

Content.displayName = 'PageLayout.Content';

export default Content;
