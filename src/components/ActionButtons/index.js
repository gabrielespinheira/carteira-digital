import React from 'react'
import { useRouter } from 'next/router'

import { Box, Button } from 'ui'

const ActionButtons = ({ onClickAdd, onClickRemove, hideAdd, hideRemove }) => {
  const router = useRouter()

  function handleAdd() {
    router.push('/form/add')
  }

  function handleRemove() {
    router.push('/form/remove')
  }

  return (
    <Box flexDirection="row" mt="sm">
      <Button
        onClick={onClickAdd ? onClickAdd : handleAdd}
        icon="FiPlusCircle"
        width="calc(50% - 8px)"
        minWidth="initial"
        mr="xxs"
        opacity={hideAdd ? '0' : '1'}
        style={hideAdd && { pointerEvents: 'none' }}
      >
        Adicionar
      </Button>

      <Button
        onClick={onClickRemove ? onClickRemove : handleRemove}
        icon="FiMinusCircle"
        bg="red"
        width="calc(50% - 8px)"
        minWidth="initial"
        ml="xxs"
        opacity={hideRemove ? '0' : '1'}
        style={hideRemove && { pointerEvents: 'none' }}
      >
        Retirar
      </Button>
    </Box>
  )
}

export default ActionButtons
