/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentToolsProps = {
  toolsLeft?: React.ReactNode;
  toolsRight?: React.ReactNode;
};

export const ContentTools = (props: ContentToolsProps) => {
  const { toolsLeft, toolsRight } = props;
  return (
    <div className='iui-layouts-content-tools'>
      <div className='iui-layouts-content-tools-left'>{toolsLeft}</div>
      <div className='iui-layouts-content-tools-right'>{toolsRight}</div>
    </div>
  );
};

ContentTools.displayName = 'PageLayout.ContentTools';

export default ContentTools;
