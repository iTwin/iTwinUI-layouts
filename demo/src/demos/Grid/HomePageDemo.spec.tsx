/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import { layoutDescribe } from '../../../cypress/common/layoutDescribe';

layoutDescribe('HomePageDemo', (screenSize) => {
  it('should render HomePageDemo', () => {
    cy.visit('home-layout');
    cy.compareSnapshot(`basic-${screenSize.width}x${screenSize.height}`);
  });
});
