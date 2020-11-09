import React from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Content, Box, Text, BoxGray } from 'ui'
import { Tabs, Topbar, ActionButtons } from 'components'
import { useData } from 'hooks'

const Control = () => {
  const history = useHistory()
  const { handleLogout } = useData()

  async function logoutClick() {
    handleLogout().then((response) => {
      if (response.success) {
        history.push(response.redirect)
      }
    })
  }

  function goSoon() {
    history.push('/app/soon')
  }

  return (
    <Layout>
      <Topbar />
      <Tabs />

      <Content className="tab-control">
        <Box flexDirection="column" mt="sm">
          <Box flexDirection="row">
            <BoxGray
              flex="1"
              mb="sm"
              mr="xxs"
              justifyContent="flex-start"
              onClick={goSoon}
            >
              <Text fontSize="lg" fontWeight="600">
                Contas bancárias
              </Text>
            </BoxGray>

            <BoxGray
              flex="1"
              mb="sm"
              ml="xxs"
              justifyContent="flex-start"
              onClick={goSoon}
            >
              <Text fontSize="lg" fontWeight="600">
                Cartões
              </Text>
            </BoxGray>
          </Box>

          <Box flexDirection="row">
            <BoxGray
              flex="1"
              mb="sm"
              mr="xxs"
              justifyContent="flex-start"
              onClick={goSoon}
            >
              <Text fontSize="lg" fontWeight="600">
                Gastos mensais
              </Text>
            </BoxGray>

            <BoxGray
              flex="1"
              mb="sm"
              ml="xxs"
              justifyContent="flex-start"
              onClick={goSoon}
            >
              <Text fontSize="lg" fontWeight="600">
                Categorias
              </Text>
            </BoxGray>
          </Box>

          <BoxGray minHeight="initial" flex="1" mb="sm" onClick={logoutClick}>
            <Text fontWeight="400" fontsize="sm">
              Sair
            </Text>
          </BoxGray>
        </Box>
      </Content>

      <ActionButtons />
    </Layout>
  )
}

export default Control
