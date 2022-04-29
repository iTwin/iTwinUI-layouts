/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('PageLayoutPaddedDemo', (screenSize) => {
  it('should render PageLayoutPaddedDemo', () => {
    cy.visit('page-layout-2');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
