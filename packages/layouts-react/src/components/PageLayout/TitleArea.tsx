/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type TitleAreaProps = {
  children: React.ReactNode;
};

export const TitleArea = (props: TitleAreaProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-content-title-area'>{children}</div>;
};

TitleArea.displayName = 'PageLayout.TitleArea';

export default TitleArea;
