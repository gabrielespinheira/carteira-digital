import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets, Input } from 'ui'
import { Header } from 'components'
import { useData } from 'hooks'

const OnboardingBank = () => {
  const history = useHistory()
  const { user, setUser } = useData()
  const [bankName, setBankName] = useState('')
  const [bankInitialBalance, setBankInitialBalance] = useState('')

  function goBack() {
    return history.push('/')
  }

  function goNext() {
    if (!bankName || !bankInitialBalance) {
      return
    }

    setUser({ ...user, config: { bankName, bankInitialBalance } })
    history.push('/onboarding/card')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={false} />

      <Box justifyContent="flex-start" width="100%">
        <Title mb="lg">
          Vamos começar com <br />
          sua conta bancária:
        </Title>

        <Input
          title="Banco"
          mb="sm"
          onChange={(e) => setBankName(e.target.value)}
          value={bankName}
        />
        <Input
          type="number"
          step=".01"
          title="Saldo inicial"
          onChange={(e) => setBankInitialBalance(e.target.value)}
          value={bankInitialBalance}
        />
      </Box>

      <Box>
        <Button title="Tudo pronto" onClick={goNext} />

        <Bullets quantity={3} active={1} mt="lg" mb="xs" />
      </Box>
    </Layout>
  )
}

export default OnboardingBank
