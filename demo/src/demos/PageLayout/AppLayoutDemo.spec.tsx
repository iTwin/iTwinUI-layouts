/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('AppLayoutDemo', (screenSize) => {
  it('should render AppLayoutDemo', () => {
    cy.visit('app-layout');
    // Hiding iTwin.js viewer to avoid flakiness
    cy.get('iframe').hide();
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
