/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import AppLayoutDemo from './AppLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';
import HomePageDemo from './HomePageDemo';

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
    path: 'home-layout',
    name: 'Home page',
    description: 'Grid layout example for home page.',
    icon: '/layouts-thumbnails/HomeLayout.png',
    component: HomePageDemo,
  },
];
