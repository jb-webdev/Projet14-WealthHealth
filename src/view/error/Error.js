import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorWrapper, ErrorStatus, ErrorMessage, ErrorRedirect } from './errorStyle'

export default function Error() {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate(`Projet14-WealthHealth/`)
  }, 2000)

  return (
    <ErrorWrapper>
      <ErrorStatus>404</ErrorStatus>
      <ErrorMessage>Oups la page n'existe pas</ErrorMessage>
      <ErrorRedirect>Vous aller être redirigé vers la page d'acceuil !</ErrorRedirect>
    </ErrorWrapper>
  )
}
