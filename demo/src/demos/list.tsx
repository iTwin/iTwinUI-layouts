/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import PageLayoutDemo from './PageLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';

/**
 * List of all demos. It is used to dynamically populate the home page and react-router.
 */
export const DEMOS_LIST = [
  { path: 'page-layout', name: 'Page layout', component: PageLayoutDemo },
  { path: 'grid-layout', name: 'Grid layout', component: GridLayoutDemo },
];
