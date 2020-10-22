import React from 'react'

import { Layout, Logo } from 'ui'

const Error = ({ message }) => {

  return (
    <Layout justifyContent="center" alignItems="center" textAlign="center">
      <Logo mb="xl" />
      { message ? message : 'Estamos passando por dificuldades, tente novamente.' }
    </Layout>
  )
}

export default Error
