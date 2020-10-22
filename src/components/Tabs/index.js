import React from 'react'
import { useRouter } from 'next/router'

import theme from 'styles/theme'
import { Box, Title } from 'ui'

const Tabs = ({}) => {
  const router = useRouter()
  const url = router.pathname

  const tabs = [
    { name: 'Conta', slug: 'account' },
    { name: 'Histórico', slug: 'history' },
    { name: 'Controle', slug: 'control' }
  ]

  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingTop="sm"
      paddingBottom="sm"
      className="tabs"
    >
      {tabs.map(tab => (
        <button
          key={tab.slug}
          onClick={() => router.push('/' + tab.slug)}
          className={url.includes(tab.slug) ? 'active' : ''}
        >
          <Title
            fontSize="sm"
            color={url.includes(tab.slug) ? 'black' : 'gray'}
          >
            {tab.name}
          </Title>
        </button>
      ))}

      <style jsx>{`
        button {
          position: relative;
          background: transparent;
          border: none;
          outline: none;
        }

        button:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -12px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: transparent;
          transition: all 0.5s;
        }

        button.active:after {
          background-color: ${theme.colors.blue};
          transition: all 0.5s;
        }
      `}</style>
    </Box>
  )
}

export default Tabs
