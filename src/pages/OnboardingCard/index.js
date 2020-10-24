import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets, Input } from 'ui'
import { Header } from 'components'
import { usePersistedState } from 'hooks'

const OnboardingCard = () => {
  const history = useHistory()
  const [cardName, setCardName] = useState('')
  const [cardLimit, setCardLimit] = useState('')
  const [cardCredit, setCardCredit] = useState(false)
  const [cardDebit, setCardDebit] = useState(false)
  const [cardInitialValue, setCardInitialValue] = useState('')
  const [onboarding, setOnboarding] = usePersistedState('@app:onboarding', {})

  function goBack() {
    history.push('/onboarding/bank')
  }

  async function goNext() {
    if (!cardName || !cardLimit || !cardInitialValue) {
      return
    }

    await setOnboarding({
      ...onboarding,
      cardName,
      cardLimit,
      cardCredit,
      cardDebit,
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
            type="checkbox"
            title="Crédito"
            mr="xxs"
            flex="1"
            minWidth="initial"
            onChange={(e) => setCardCredit(!cardCredit)}
            checked={cardCredit ? 'checked' : ''}
          />
          <Input
            type="checkbox"
            title="Débito"
            ml="xxs"
            flex="1"
            minWidth="initial"
            onChange={(e) => setCardDebit(!cardDebit)}
            checked={cardDebit ? 'checked' : ''}
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
          title="Saldo inicial"
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
