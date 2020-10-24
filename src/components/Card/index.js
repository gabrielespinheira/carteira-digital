import React from 'react'

import { Box, Text } from 'ui'
import theme from 'styles/theme'

const Card = ({ limit, flag, balance }) => {
  return (
    <React.Fragment>
      <div className="backgroundCard">
        <Box flexDirection="row" justifyContent="space-between">
          <Text color="white" fontSize="sm">
            Limite <br />
            {Number(limit).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
          <Text color="white">{flag}</Text>
        </Box>

        <Box>
          <Text color="white" fontSize="xl" fontWeight="600">
            {Number(Math.abs(balance)).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
          <Text color="white" fontSize="xs" fontWeight="400">
            Fatura Atual
          </Text>
        </Box>
      </div>

      <style jsx>{`
        .backgroundCard {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          border-radius: ${theme.radii.md};
          min-height: 220px;
          padding: ${theme.space.md}px;
          background: linear-gradient(110.66deg, #6ee2f5 14.28%, #6454f0 100%);
        }
      `}</style>
    </React.Fragment>
  )
}

export default Card
