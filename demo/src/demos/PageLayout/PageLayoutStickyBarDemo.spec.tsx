/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('PageLayoutStickyBarDemo', (screenSize) => {
  it('should render PageLayoutStickyBarDemo', () => {
    cy.visit('page-layout-3');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
