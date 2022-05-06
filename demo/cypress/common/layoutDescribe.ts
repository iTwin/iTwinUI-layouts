/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const SCREEN_SIZES = [
  { width: 3440, height: 1440 }, // Ultrawide
  { width: 3840, height: 2160 }, // 4K
  { width: 1920, height: 1080 }, // Full HD
  { width: 1366, height: 768 }, // 2nd popular desktop resolution
  { width: 820, height: 1024 }, // Tablet
  { width: 640, height: 360 }, // Landscape mobile
  { width: 360, height: 640 }, // Mobile
] as const;

/**
 * Runs tests for all the different screen sizes.
 */
export const layoutDescribe = (
  testsName: string,
  callback: (screenSize: typeof SCREEN_SIZES[number]) => void,
) => {
  SCREEN_SIZES.forEach((screenSize) => {
    describe(`${testsName} ${screenSize.width}x${screenSize.height}`, () => {
      beforeEach(() => {
        cy.viewport(screenSize.width, screenSize.height);
      });
      callback(screenSize);
    });
  });
};
