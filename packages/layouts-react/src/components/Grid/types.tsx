/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

export type ScreenSizes = {
  mobile: number;
  landscapeMobile: number;
  tablet: number;
  smallMonitor: number;
  monitor: number;
};

export type ScreenSizesOffset = {
  mobile: 'auto' | number;
  landscapeMobile: 'auto' | number;
  tablet: 'auto' | number;
  smallMonitor: 'auto' | number;
  monitor: 'auto' | number;
};
