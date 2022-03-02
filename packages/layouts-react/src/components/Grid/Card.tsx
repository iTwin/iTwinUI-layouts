/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type CardProps = {
  children?: React.ReactNode;
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
};

export const Card = (props: CardProps) => {
  const { children, style } = props;
  return (
    <div className='iui-layouts-card' style={style}>
      {children}
    </div>
  );
};

Card.displayName = 'PageLayout.Card';

export default Card;
