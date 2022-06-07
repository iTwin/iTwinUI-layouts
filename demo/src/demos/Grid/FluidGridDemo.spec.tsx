/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('FluidGridDemo', (screenSize) => {
  it('should render FluidGridDemo', () => {
    cy.visit('fluid-grid');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
