/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import PageLayoutDemo from './PageLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';
import GridLayoutDemo2 from './GridLayoutDemo2';
import GridLayoutDemo3 from './GridLayoutDemo3';

/**
 * List of all demos. It is used to dynamically populate the home page and react-router.
 */
export const DEMOS_LIST = [
  {
    path: 'page-layout',
    name: 'Page layout',
    description: 'Basic layout with header and side navigation.',
    component: PageLayoutDemo,
  },
  {
    path: 'grid-layout',
    name: 'Grid layout',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo,
  },
  {
    path: 'grid-layout2',
    name: 'Grid layout2',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo2,
  },
  {
    path: 'grid-layout3',
    name: 'Grid layout3',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo3,
  },
];
