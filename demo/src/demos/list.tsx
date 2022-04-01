/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import PageLayoutDemo from './PageLayoutDemo';
import GridLayoutDemo from './GridLayoutDemo';
import { SvgImodelHollow, SvgGrid } from '@itwin/itwinui-icons-react';

/**
 * List of all demos. It is used to dynamically populate the home page and react-router.
 */
export const DEMOS_LIST = [
  {
    path: 'app-layout',
    name: 'App',
    description: 'Display an iTwin.js frame within the content area.',
    icon: <SvgImodelHollow />,
    component: PageLayoutDemo,
  },
  {
    path: 'grid-layout',
    name: 'Tiles grid',
    description: 'A responsive grid of tiles.',
    icon: <SvgGrid />,
    component: GridLayoutDemo,
  },
];
