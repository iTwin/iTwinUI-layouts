/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ContentToolsProps = {
  /**
   * Tools displayed at the left side of toolbar
   */
  left?: React.ReactNode;
  /**
   * Tools displayed at the right side of toolbar
   */
  right?: React.ReactNode;
};

export const ContentTools = (props: ContentToolsProps) => {
  const { left, right } = props;
  return (
    <div className='iui-layouts-page-content-tools'>
      {left && (
        <div className='iui-layouts-page-content-tools-left'>{left}</div>
      )}
      {right && (
        <div className='iui-layouts-page-content-tools-right'>{right}</div>
      )}
    </div>
  );
};

ContentTools.displayName = 'PageLayout.ContentTools';

export default ContentTools;
