import React from 'react';
import { Button, ButtonGroup, IconButton } from '@itwin/itwinui-react';
import { SvgChevronRight } from '@itwin/itwinui-icons-react';
import './DemoMobileMenuItem.scss';

export type DemoMobileHeaderMenuItemProps = {
  startIcon?: JSX.Element;
  title: string;
  description?: string;
  showChevron?: boolean;
  onChevronClick?: () => void;
  isActive?: boolean;
};

const DemoMobileHeaderMenuItem = (props: DemoMobileHeaderMenuItemProps) => {
  const {
    startIcon,
    title,
    description,
    showChevron,
    onChevronClick,
    isActive,
  } = props;
  return (
    <ButtonGroup className='demo-header-menu-item-button'>
      <Button
        styleType={'borderless'}
        startIcon={startIcon}
        className={isActive ? 'iui-active' : ''}
      >
        <div className='demo-menu-item-button-title'>{title}</div>
        {description && <div className='iui-description'>{description}</div>}
      </Button>
      {showChevron && (
        <IconButton styleType='borderless' onClick={onChevronClick}>
          <SvgChevronRight />
        </IconButton>
      )}
    </ButtonGroup>
  );
};

export default DemoMobileHeaderMenuItem;
