/**
 * @author jean-jacques BOERO
 * @file Error retourne la page Error
 * @returns {reactElement}
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorWrapper, ErrorStatus, ErrorMessage, ErrorRedirect } from './errorStyle'

export default function Error() {
  const navigate = useNavigate()
    /**
     * redirection après 2 secondes vers la page home
     */
  setTimeout(() => {
    navigate(`/`)
  }, 2000)

  return (
    <ErrorWrapper>
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>Oups la page n'existe pas</ErrorMessage>
      <ErrorRedirect>Vous aller être redirigé vers la page d'acceuil !</ErrorRedirect>
    </ErrorWrapper>
  )
}
