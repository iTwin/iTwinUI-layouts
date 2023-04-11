/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
/**
 * Object to define column span for specific screen size.
 *
 * Screen sizes:
 *  - mobile: screen < 500px
 *  - tablet: screen < 1100px
 *  - smallMonitor: screen < 1500px
 *  - monitor: 1500px < screen
 */
export type ResponsiveColumnSpan = {
  mobile: number; // screen < 500px
  tablet: number; // screen < 1100px
  smallMonitor: number; // screen < 1500px
  monitor: number; // 1500px < screen
};

/**
 * Object to define column start for specific screen size.
 *
 * You can pass number or 'auto'.
 * - number - defines column number on which grid item starts.
 * - 'auto' - automatically place grid item at nearest empty column.
 *
 * Screen sizes:
 *  - mobile: screen < 500px
 *  - tablet: screen < 1100px
 *  - smallMonitor: screen < 1500px
 *  - monitor: 1500px < screen
 */
export type ResponsiveColumnStart = {
  mobile: 'auto' | number; // screen < 500px
  tablet: 'auto' | number; // screen < 1100px
  smallMonitor: 'auto' | number; // screen < 1500px
  monitor: 'auto' | number; //  1500px < screen
};
