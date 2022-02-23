/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
describe('PageLayoutDemo', () => {
  it('should render PageLayoutDemo', () => {
    cy.visit('http://host.docker.internal:3001/iTwinUI-layouts/#page-layout');
    cy.compareSnapshot('test-screen');
  });
});
