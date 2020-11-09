import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Layout, Button, Title, Box, Bullets, Input } from 'ui'
import { Header } from 'components'
import { usePersistedState } from 'hooks'

const OnboardingCard = () => {
  const history = useHistory()
  const [cardName, setCardName] = useState('')
  const [cardLimit, setCardLimit] = useState('')
  const [cardType, setCardType] = useState('')
  const [cardInitialValue, setCardInitialValue] = useState('')
  const [onboarding, setOnboarding] = usePersistedState('@app:onboarding', {})

  function goBack() {
    history.push('/onboarding/bank')
  }

  async function goNext() {
    if (!cardName || !cardLimit || !cardInitialValue) {
      toast.error('Preencha todos os campos')
      return
    }

    await setOnboarding({
      ...onboarding,
      cardName,
      cardLimit,
      cardType,
      cardInitialValue,
    })
    history.push('/onboarding/money')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={false} />

      <Box justifyContent="flex-start" width="100%">
        <Title mb="lg">
          Agora vamos cadastrar <br />
          seu primeiro cartão:
        </Title>

        <Input
          title="Apelido"
          mb="sm"
          onChange={(e) => setCardName(e.target.value)}
          value={cardName}
        />

        <Box flexDirection="row" flexWrap="nowrap" mb="sm">
          <Input
            type="radio"
            name="type"
            title="Crédito"
            mr="xxs"
            flex="1"
            minWidth="initial"
            onChange={(e) => setCardType('credit')}
            checked={cardType === 'credit' ? 'checked' : ''}
          />
          <Input
            type="radio"
            name="type"
            title="Débito"
            ml="xxs"
            flex="1"
            minWidth="initial"
            onChange={(e) => setCardType('debit')}
            checked={cardType === 'debit' ? 'checked' : ''}
          />
        </Box>

        <Input
          type="number"
          title="Limite"
          mb="sm"
          onChange={(e) => setCardLimit(e.target.value)}
          value={cardLimit}
        />

        <Input
          type="number"
          title="Saldo atual"
          onChange={(e) => setCardInitialValue(e.target.value)}
          value={cardInitialValue}
        />
      </Box>

      <Box>
        <Button title="Vamos lá" onClick={goNext} />

        <Bullets quantity={3} active={2} mt="lg" mb="xs" />
      </Box>
    </Layout>
  )
}

export default OnboardingCard
