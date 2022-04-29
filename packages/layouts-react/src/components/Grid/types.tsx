/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

/**
 * Object to define column span for specific screen size.
 *
 * Screen sizes:
 *  - mobile: screen < 486px
 *  - landscapeMobile: 487px < screen < 768px
 *  - tablet: 769px < screen < 991px
 *  - smallMonitor: 992px < screen < 1399px
 *  - monitor: 1400px < screen
 */
export type ResponsiveColumnSpan = {
  mobile: number; // screen < 486px
  landscapeMobile: number; // 487px < screen < 768px
  tablet: number; // 769px < screen < 991px
  smallMonitor: number; // 992px < screen < 1399px
  monitor: number; // 1400px < screen
};

/**
 * Object to define column start for specific screen size.
 *
 * You can pass number or 'auto'.
 * - number - defines column number on which grid item starts.
 * - 'auto' - automatically place grid item at nearest empty column.
 *
 * Screen sizes:
 *  - mobile: screen < 486px
 *  - landscapeMobile: 487px < screen < 768px
 *  - tablet: 769px < screen < 991px
 *  - smallMonitor: 992px < screen < 1399px
 *  - monitor: 1400px < screen
 */
export type ResponsiveColumnStart = {
  mobile: 'auto' | number; // screen < 486px
  landscapeMobile: 'auto' | number; // 487px < screen < 768px
  tablet: 'auto' | number; // 769px < screen < 991px
  smallMonitor: 'auto' | number; // 992px < screen < 1399px
  monitor: 'auto' | number; // 1400px < screen
};
