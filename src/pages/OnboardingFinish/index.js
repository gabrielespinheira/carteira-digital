import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Button, Title, Box, Bullets } from 'ui'
import { Header } from 'components'
import { useData, useDB } from 'hooks'
import { createCard, createBank, createTransaction } from 'sdk'

const OnboardingFinish = () => {
  const history = useHistory()
  const { db } = useDB()
  const { user } = useData()

  useEffect(() => {
    const {
      bankInitialBalance,
      bankName,
      cardCredit,
      cardDebit,
      cardInitialValue,
      cardLimit,
      cardName,
      money,
    } = user.config

    createCard(db, user, cardName, {
      debit: cardDebit,
      credit: cardCredit,
      initialValue: cardInitialValue,
      limit: cardLimit,
      name: cardName,
    })

    createBank(db, user, bankName, {
      initialValue: bankInitialBalance,
      name: bankName,
    })

    createTransaction(db, user, {
      type: 'bank',
      method: bankName,
      value: bankInitialBalance,
      title: 'Saldo inicial banco',
    })

    createTransaction(db, user, {
      type: 'card',
      method: cardName,
      value: cardInitialValue,
      title: 'Saldo inicial cartão',
    })

    createTransaction(db, user, {
      value: money,
      type: 'money',
      method: 'Money',
      title: 'Saldo inicial dinheiro',
    })

    // update onboarding status
    db.collection('users').doc(user.uid).update({ onboarding: true })
  }, [db, user])

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
