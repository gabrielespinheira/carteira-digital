import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets, Input } from 'ui'
import { Header } from 'components'
import { useData } from 'hooks'

const OnboardingMoney = () => {
  const history = useHistory()
  const { user, setUser } = useData()
  const [money, setMoney] = useState('')

  function goBack() {
    history.push('/onboarding-card')
  }

  function goNext() {
    if (!money) {
      return
    }

    setUser({
      ...user,
      config: {
        ...user.config,
        money,
      },
    })
    history.push('/onboarding-finish')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={false} />

      <Box justifyContent="flex-start" width="100%">
        <Title mb="lg">
          Por último, quanto você tem de <br />
          dinheiro em espécie:
        </Title>

        <Input
          title="R$"
          onChange={(e) => setMoney(e.target.value)}
          value={money}
        />
      </Box>

      <Box>
        <Button title="Ok" onClick={goNext} />

        <Bullets quantity={3} active={3} mt="lg" mb="xs" />
      </Box>
    </Layout>
  )
}

export default OnboardingMoney
