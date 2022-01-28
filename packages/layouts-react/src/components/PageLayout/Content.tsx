import React from 'react';

export type ContentProps = {
  children: React.ReactNode;
};

export const Content = (props: ContentProps) => {
  const { children } = props;
  return <div className='iui-layouts-page-content'>{children}</div>;
};

Content.displayName = 'PageLayout.Content';

export default Content;
