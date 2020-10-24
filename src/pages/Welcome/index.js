import React, { useEffect, Suspense } from 'react'
import { useHistory } from 'react-router-dom'

import { Loading } from 'components'
import { useData } from 'hooks'

const Layout = React.lazy(() => import('ui/Layout'))
const Button = React.lazy(() => import('ui/Button'))
const Title = React.lazy(() => import('ui/Title'))
const Box = React.lazy(() => import('ui/Box'))
const Bullets = React.lazy(() => import('ui/Bullets'))
const Header = React.lazy(() => import('components/Header'))

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
