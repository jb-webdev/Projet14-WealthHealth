import React from 'react'
import close from './closeIcon2.png'
import { Modal, ModalContent, ModalWrapperIcon, ModalImage, ModalMessage } from './styles'


export default function ModalCustomP14({isOpen, message, closeModal}) {
  

  return (
    <>
    {isOpen ?
      <Modal>
        <ModalContent>
          <ModalWrapperIcon>
            <ModalImage src={close} alt="img close modal" onClick={closeModal} />
          </ModalWrapperIcon>
          <ModalMessage>{message}</ModalMessage>
        </ModalContent>
      </Modal>
      :
      
      ""
    }
  </>
  )
}