/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import PageLayoutDemo from './PageLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';
import GridLayoutDemo2 from './GridLayoutDemo2';
import GridLayoutDemo3 from './GridLayoutDemo3';
import GridLayoutDemo4 from './GridLayoutDemo4';
import GridLayoutDemo5 from './GridLayoutDemo5';
import GridLayoutDemo6 from './GridLayoutDemo6';
import GridLayoutDemo7 from './GridLayoutDemo7';

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
  {
    path: 'grid-layout4',
    name: 'Grid layout4',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo4,
  },
  {
    path: 'grid-layout5',
    name: 'Grid layout5',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo5,
  },
  {
    path: 'grid-layout6',
    name: 'Grid layout6',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo6,
  },
  {
    path: 'grid-layout7',
    name: 'Grid layout7',
    description: 'Grid layout to display array of tiles.',
    component: GridLayoutDemo7,
  },
];
