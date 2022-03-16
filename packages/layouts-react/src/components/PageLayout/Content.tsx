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
  return (
    <div
      className={`iui-layouts-content ${
        padded ? 'iui-layouts-content-padded' : ''
      }`}
    >
      {children}
    </div>
  );
};

Content.displayName = 'PageLayout.Content';

export default Content;
