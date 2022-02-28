/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
describe('PageLayoutDemo', () => {
  it('should render PageLayoutDemo', () => {
    cy.visit('page-layout');
    // Hiding iTwin.js viewer to avoid flakiness
    cy.get('iframe').hide();
    cy.compareSnapshot('basic');
  });
});
