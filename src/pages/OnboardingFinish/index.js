import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets } from 'ui'
import { Header } from 'components'
import { useData, useDB, usePersistedState } from 'hooks'
import { createCard, createBank, createTransaction } from 'sdk'

const OnboardingFinish = () => {
  const history = useHistory()
  const { db } = useDB()
  const { user, setRehydrated } = useData()
  const [onboarding, setOnboarding] = usePersistedState('@app:onboarding', {})

  useEffect(() => {
    async function inserts() {
      if (!onboarding) {
        return
      }

      const {
        bankInitialBalance,
        bankName,
        cardCredit,
        cardDebit,
        cardInitialValue,
        cardLimit,
        cardName,
        money,
      } = onboarding

      await createCard(db, user.uid, cardName, {
        debit: cardDebit,
        credit: cardCredit,
        initialValue: cardInitialValue,
        limit: cardLimit,
        name: cardName,
      })

      await createBank(db, user.uid, bankName, {
        initialValue: bankInitialBalance,
        name: bankName,
      })

      await createTransaction(db, user.uid, {
        type: 'out',
        method: cardName,
        value: 0 - cardInitialValue,
        title: 'Saldo inicial cartão',
      })

      await createTransaction(db, user.uid, {
        value: money,
        type: 'in',
        method: 'Money',
        title: 'Saldo inicial dinheiro',
      })

      // update onboarding status
      await db.collection('users').doc(user.uid).update({ onboarding: true })

      setOnboarding(false)
      setRehydrated(new Date().getTime())
    }

    inserts()
  }, [db, onboarding, setOnboarding, setRehydrated, user])

  function goBack() {
    history.push('/onboarding/money')
  }

  function goFinish() {
    history.push('/app/account')
  }

  return (
    <Layout justifyContent="space-between" alignItems="center">
      <Header clickNav={goBack} navHidden={false} />

      <Box justifyContent="flex-start" width="100%">
        <Title mb="lg">
          Você acaba de dar o primeiro <br />
          passo para sua organização <br />
          financeira!
        </Title>

        <Title>
          No menu controle, você pode <br />
          cadastrar mais contas bancárias e <br />
          cartões, para ter controle total dos <br />
          seus gastos.
        </Title>
      </Box>

      <Box>
        <Button title="Começar" onClick={goFinish} />

        <Bullets quantity={3} active={3} hidden={true} mt="lg" mb="xs" />
      </Box>
    </Layout>
  )
}

export default OnboardingFinish
