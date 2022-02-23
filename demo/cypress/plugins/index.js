/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');
  getCompareSnapshotsPlugin(on, config);

  // on('after:screenshot', (details) => {
  //   console.log('details', details);
  //   const fs = require('fs-extra');
  //   console.log(
  //     'exists',
  //     fs.readdirSync('/e2e/demo/cypress-visual-screenshots/comparison/'),
  //   );
  // });

  // addMatchImageSnapshotPlugin(on, config);
  // getCompareSnapshotsPlugin(on, config);
};
