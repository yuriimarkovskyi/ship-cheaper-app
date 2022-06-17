import React from 'react';
import Modal from 'react-modal';
import closeIcon from 'images/icons/close-icon.png';
import FormsList from './FormsList';

Modal.setAppElement('#root');

interface Props {
  isVisible: boolean
  close: () => void
}

function ModalForms({ isVisible, close }: Props) {
  return (
    <Modal
      className="modal"
      isOpen={isVisible}
      onRequestClose={close}
    >
      <button
        className="modal__close-button"
        type="button"
        onClick={close}
      >
        <img src={closeIcon} alt="" />
      </button>
      <FormsList close={close} />
    </Modal>
  );
}

export default ModalForms;
