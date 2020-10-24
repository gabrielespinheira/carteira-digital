import React, { useEffect, useState } from 'react'

import {
  getTransactions,
  getTotalBalance,
  getCardBalance,
  getBankBalance,
  getMoneyBalance,
} from 'sdk'
import { Layout, Content, Box, Text, BoxGray } from 'ui'
import { Tabs, Topbar, Card, ActionButtons } from 'components'
import { useData } from 'hooks'

export default function Account() {
  const { transactions } = useData()

  const totalBalance = getTotalBalance(transactions)
  const bankBalance = getBankBalance(transactions)
  const cardBalance = getCardBalance(transactions)
  const moneyBalance = getMoneyBalance(transactions)

  const cards = []

  return (
    <Layout>
      <Topbar />
      <Tabs />

      <Content>
        <BoxGray mt="sm" mb="md">
          <Text
            fontSize="xl"
            color={Number(totalBalance) < 0 ? 'red' : 'blue'}
            fontWeight="600"
          >
            {Number(totalBalance).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
          <Text fontSize="md">Saldo Total</Text>
        </BoxGray>

        <Box>
          <Card
            limit={typeof cards[0] !== 'undefined' ? cards[0].limit : 0}
            flag={typeof cards[0] !== 'undefined' ? cards[0].name : ''}
            balance={cardBalance}
          />
        </Box>

        <Box flexDirection="row" justifyContent="center" mt="md">
          <BoxGray width="50%" mr="xxs">
            <Text fontSize="md" fontWeight="600">
              {Number(bankBalance).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
            <Text fontSize="xs" fontWeight="400">
              Saldo bancário
            </Text>
          </BoxGray>

          <BoxGray width="50%" ml="xxs">
            <Text fontSize="md" fontWeight="600">
              {Number(moneyBalance).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
            <Text fontSize="xs" fontWeight="400">
              em Dinheiro
            </Text>
          </BoxGray>
        </Box>
      </Content>

      <ActionButtons />
    </Layout>
  )
}
