/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

export type ScreenSizes = {
  mobile: number; // screen < 486px
  landscapeMobile: number; // 487px < screen < 768px
  tablet: number; // 769px < screen < 991px
  smallMonitor: number; // 992px < screen < 1399px
  monitor: number; // 1400px < screen
};

export type ScreenSizesOffset = {
  mobile: 'auto' | number; // screen < 486px
  landscapeMobile: 'auto' | number; // 487px < screen < 768px
  tablet: 'auto' | number; // 769px < screen < 991px
  smallMonitor: 'auto' | number; // 992px < screen < 1399px
  monitor: 'auto' | number; // 1400px < screen
};
