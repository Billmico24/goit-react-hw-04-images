import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay, ModalEl, Image } from "./Modal.styled";

export default function Modal({ largeImage, toggleModal }) {

  useEffect(() => {


    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal()
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }

  }, [toggleModal]);


  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal()
    }
  };


  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalEl >
        <Image src={largeImage} alt=""></Image>
      </ModalEl>
    </Overlay>
  );

}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired

}