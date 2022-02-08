/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
import React from 'react';
import { DemoHeader } from '../common/DemoHeader';
import { DemoSideNav } from '../common/DemoSideNav';
import { DemoTemplate } from '../common/DemoTemplate';
import { PageLayout } from '@itwin/itwinui-layouts-react';

export const PageLayoutDemo = () => {
  return (
    <DemoTemplate>
      <PageLayout>
        <PageLayout.Header>
          <DemoHeader />
        </PageLayout.Header>

        <PageLayout.SideNavigation>
          <DemoSideNav />
        </PageLayout.SideNavigation>

        <PageLayout.Content>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391622.38536755356!2d-75.43763126705527!3d39.92908811024802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6f534e0393163%3A0x1eb84dcc94686b39!2sBentley%20Systems%20Inc!5e0!3m2!1sen!2sus!4v1644333059464!5m2!1sen!2sus'
            loading='lazy'
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </PageLayout.Content>
      </PageLayout>
    </DemoTemplate>
  );
};

export default PageLayoutDemo;
