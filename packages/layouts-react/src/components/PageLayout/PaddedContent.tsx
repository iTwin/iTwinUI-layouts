/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type PaddedContentProps = {
  children: React.ReactNode;
};

export const PaddedContent = (props: PaddedContentProps) => {
  const { children } = props;
  return <div className='iui-layouts-content-padded'>{children}</div>;
};

PaddedContent.displayName = 'PageLayout.PaddedContent';

export default PaddedContent;
