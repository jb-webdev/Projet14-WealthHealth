import React from 'react'
import './modal.css'
import close from './closeIcon2.png'

// Envoi du formulaire réussi !

export default function ModalCustomP14({ message, closeModal }) {
  const handleClick = () => {
    closeModal()
  }

  return (
    <div className='modalcustom sucess'>
      <div className='modalcustom-content'>
        <div className='modalcustom-wrapper-icon'>
          <img src={close} alt="logo close" onClick={handleClick} />
        </div>
        <p className='modalcustom-message-form'>{message}</p>
      </div>
    </div>
  )
}