/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';

export type ToolsAreaProps = {
  children?: React.ReactNode;
  sticky?: boolean;
};

export const DataArea = (props: ToolsAreaProps) => {
  const { children, sticky } = props;
  return (
    <div
      className={cx('iui-layouts-page-content-data-area', {
        'iui-layouts-page-content-data-area-sticky': sticky,
      })}
    >
      {children}
    </div>
  );
};

DataArea.displayName = 'PageLayout.ToolsArea';

export default DataArea;
