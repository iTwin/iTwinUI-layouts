/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../cypress/common/layoutDescribe';

layoutDescribe('TableLayoutDemo', (screenSize) => {
  it('should render TableLayoutDemo', () => {
    cy.visit('table-layout');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
