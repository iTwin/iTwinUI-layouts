/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import cx from 'classnames';
import { StylingProps } from '../../utils/props';

export type TitleAreaProps = {
  children: React.ReactNode;
} & StylingProps;

export const TitleArea = (props: TitleAreaProps) => {
  const { className, style, children } = props;
  return (
    <div
      className={cx('iui-layouts-page-content-title-area', className)}
      style={style}
    >
      {children}
    </div>
  );
};

TitleArea.displayName = 'PageLayout.TitleArea';

export default TitleArea;
