/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import AppLayoutDemo from './AppLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';

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
];
