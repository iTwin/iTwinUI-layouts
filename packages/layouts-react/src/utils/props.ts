/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';

export type ClassNameProps = {
  /**
   * Custom CSS class name.
   */
  className?: string;
};

export type StylingProps = {
  /**
   * Custom CSS style properties.
   */
  style?: React.CSSProperties;
} & ClassNameProps;

export type CommonProps = {
  /**
   * Children of the element
   */
  children: React.ReactNode;
} & StylingProps;
