import React, { useEffect, Suspense } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets } from 'ui'
import { Header, Loading } from 'components'
import { useData } from 'hooks'

const Welcome = () => {
  const { user } = useData()
  const history = useHistory()
  const { handleSignInGoogle } = useData()

  useEffect(() => {
    if (user && typeof user.uid !== 'undefined') {
      return history.push('/app/account')
    }
  }, [history, user])

  async function clickSignInGoogle() {
    handleSignInGoogle().then((response) => {
      if (response.success) {
        return history.push(response.redirect)
      }
    })
  }

  return (
    <Suspense fallback={<Loading />}>
      <Layout justifyContent="space-between" alignItems="center">
        <Header navHidden={true} />

        <Box>
          <Title
            fontSize="lg"
            textAlign="center"
            fontWeight="600"
            marginBottom="xl"
          >
            Acompanhe seus gastos e organize sua vida financeira
          </Title>

          <Title textAlign="center">Vamos lá, são só 3 passos!</Title>
        </Box>

        <Box>
          <Button
            title="Entrar com Google"
            icon="FiLogIn"
            onClick={clickSignInGoogle}
          />

          <Bullets quantity={3} active={1} hidden={true} />
        </Box>
      </Layout>
    </Suspense>
  )
}

export default Welcome
