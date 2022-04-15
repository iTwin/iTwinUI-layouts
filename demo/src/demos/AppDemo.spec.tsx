/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../cypress/common/layoutDescribe';

layoutDescribe('AppDemo', (screenSize) => {
  it('should render AppDemo', () => {
    cy.visit('app');
    // Hiding iTwin.js viewer to avoid flakiness
    cy.get('iframe').hide();
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
