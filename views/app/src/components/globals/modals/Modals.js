import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';


function Portal({ children }) {
  const modalRoot = document.getElementById('modal'); // A div with id=modal-root in the index.html
  const [element] = useState(document.createElement('div')); // Create a div element which will be mounted within modal-root

  useEffect(() => {
    modalRoot.appendChild(element);

    // cleanup method to remove the appended child
    return function cleanup() {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  return createPortal(children, element);
}


const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledModal = {
  ModalWrapper,
  ModalBody,
  CloseButton,
};

// A modal component which will be used by other components / pages
function Modal({ children, toggle, open }) {
  return (
    <Portal>
      {open && (
        <>
          <StyledModal.ModalWrapper onClick={toggle}>
            <StyledModal.ModalBody onClick={event => event.stopPropagation()}>
              <StyledModal.CloseButton onClick={toggle}>
              &times;
              </StyledModal.CloseButton>
              {children}
            </StyledModal.ModalBody>
          </StyledModal.ModalWrapper>
        </>
      )}
    </Portal>
  );
}

export default Modal;