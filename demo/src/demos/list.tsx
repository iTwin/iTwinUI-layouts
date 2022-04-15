/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import AppLayoutDemo from './AppLayoutDemo';
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
    path: 'app-layout',
    name: 'App',
    description: 'Display an iTwin.js frame within the content area.',
    icon: 'layouts-thumbnails/AppLayout.png',
    component: AppLayoutDemo,
  },
  {
    path: 'grid-layout',
    name: 'Tiles grid',
    description: 'A responsive grid of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo,
  },
  {
    path: 'grid-layout2',
    name: 'Tiles grid2',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo2,
  },
  {
    path: 'grid-layout3',
    name: 'Tiles grid3',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo3,
  },
  {
    path: 'grid-layout4',
    name: 'Tiles grid4',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo4,
  },
  {
    path: 'grid-layout5',
    name: 'Tiles grid5',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo5,
  },
  {
    path: 'grid-layout6',
    name: 'Tiles grid6',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo6,
  },
  {
    path: 'grid-layout7',
    name: 'Tiles grid7',
    description: 'Grid layout to display array of tiles.',
    icon: 'layouts-thumbnails/TileGridLayout.png',
    component: GridLayoutDemo7,
  },
];
