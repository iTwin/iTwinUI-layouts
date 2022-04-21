/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/

export const styleKeysValues = (key: string, value: number | undefined) => {
  if (value) {
    return {
      [key]: `span ${value}`,
    };
  }
  return null;
};
