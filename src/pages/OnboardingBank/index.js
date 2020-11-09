import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Layout, Button, Title, Box, Bullets, Input } from 'ui'
import { Header } from 'components'
import { useData, usePersistedState } from 'hooks'

const OnboardingBank = () => {
  const history = useHistory()
  const { handleLogout } = useData()
  const [bankName, setBankName] = useState('')
  const [bankInitialBalance, setBankInitialBalance] = useState('')
  const [onboarding, setOnboarding] = usePersistedState('@app:onboarding', {})

  async function goBack() {
    await handleLogout()
    return history.push('/')
  }

  async function goNext() {
    if (!bankName || !bankInitialBalance) {
      toast.error('Preencha todos os campos')
      return
    }

    await setOnboarding({ ...onboarding, bankName, bankInitialBalance })
    history.push('/onboarding/card')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={true} />

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
          title="Saldo atual"
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
