/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import AppLayoutDemo from './PageLayout/AppLayoutDemo';
import PageLayoutPaddedDemo from './PageLayout/PageLayoutPaddedDemo';
import GridLayoutDemo from './Grid/GridLayoutDemo';
import HomePageDemo from './Grid/HomePageDemo';

/**
 * List of all demos. It is used to dynamically populate the home page and react-router.
 */
export const DEMOS_LIST = [
  {
    listName: 'Layouts',
    layouts: [
      {
        path: 'app-layout',
        name: 'PageLayout 1',
        description:
          'Demo consisting of header, side navigation, and full frame content (eg. iTwin.js frame).',
        icon: 'layouts-thumbnails/AppLayout.png',
        component: AppLayoutDemo,
      },
      {
        path: 'page-layout-2',
        name: 'PageLayout 2',
        description:
          'Demo consisting of header, side navigation, and padded content (eg. array of tiles or table).',
        icon: 'layouts-thumbnails/PageLayoutPadded.png',
        component: PageLayoutPaddedDemo,
      },
    ],
  },
  {
    listName: 'Grid',
    layouts: [
      {
        path: 'grid-layout',
        name: 'Fluid grid',
        description: 'A responsive grid of tiles.',
        icon: 'layouts-thumbnails/TileGridLayout.png',
        component: GridLayoutDemo,
      },
      {
        path: 'home-layout',
        name: 'Grid 1',
        description: 'Grid layout example for home page.',
        icon: 'layouts-thumbnails/HomeLayout.png',
        component: HomePageDemo,
      },
    ],
  },
];
