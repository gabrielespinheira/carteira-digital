import React from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Title, Box } from 'ui'
import { Header } from 'components'

const Soon = () => {
  const history = useHistory()

  function goBack() {
    history.push('/app/control')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={false} />

      <Box justifyContent="center" width="100%" height="100%">
        <Title mb="lg">
          Está funcionalidade ainda não está disponível, em breve teremos
          novidades!
        </Title>
      </Box>
    </Layout>
  )
}

export default Soon
