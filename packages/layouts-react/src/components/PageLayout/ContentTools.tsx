/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentToolsProps = {
  childrenLeft?: React.ReactNode;
  childrenRight?: React.ReactNode;
};

export const ContentTools = (props: ContentToolsProps) => {
  const { childrenLeft, childrenRight } = props;
  return (
    <div className='iui-layouts-content-tools'>
      <div className='iui-layouts-content-tools-left'>{childrenLeft}</div>
      <div className='iui-layouts-content-tools-right'>{childrenRight}</div>
    </div>
  );
};

ContentTools.displayName = 'PageLayout.ContentTools';

export default ContentTools;
