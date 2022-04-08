import React from 'react';
import { Modal } from '@itwin/itwinui-react';
import './DemoPopupMenu.scss';

export type DemoPopupMenuProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const DemoPopupMenu = (props: DemoPopupMenuProps) => {
  const { children, isOpen, onClose } = props;

  return (
    <Modal
      title=''
      isOpen={isOpen}
      className='demo-popup-menu'
      onClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default DemoPopupMenu;
