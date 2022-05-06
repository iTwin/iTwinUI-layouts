/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('GridDemo', (screenSize) => {
  it('should render GridDemo', () => {
    cy.visit('grid-1');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
