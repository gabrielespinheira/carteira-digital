import React from 'react'
import { FiDollarSign } from 'react-icons/fi'

import { Layout, Content, Box, Text, BoxGray } from 'ui'
import { Topbar, Tabs, ActionButtons } from 'components'
import { useData } from 'hooks'

const History = () => {
  const { transactions } = useData()

  return (
    <Layout>
      <Topbar />
      <Tabs />

      <Content mt="sm" className="tab-history">
        <Box flexDirection="column">
          {transactions &&
            transactions.map((entry, key) => (
              <BoxGray
                key={key}
                flexDirection="row"
                alignItems="center"
                mb="sm"
              >
                <Box mr="xs">
                  <FiDollarSign size={24} />
                </Box>
                <Box flex="1">
                  <Text
                    fontSize="lg"
                    color={entry.value < 0 ? 'red' : 'blue'}
                    fontWeight="600"
                    mt="xs"
                  >
                    {Number(entry.value).toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </Text>
                  <Text fontSize="xs" fontWeight="400">
                    {entry?.title}
                  </Text>
                  <Text fontSize="xxs" textAlign="right">
                    {entry.time && new Date(entry.time).toLocaleString('pt-br')}
                  </Text>
                </Box>
              </BoxGray>
            ))}
        </Box>
      </Content>

      <ActionButtons />
    </Layout>
  )
}

export default History
