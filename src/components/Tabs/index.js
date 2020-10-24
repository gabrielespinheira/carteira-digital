import React from 'react'
import { useHistory } from 'react-router-dom'

import theme from 'styles/theme'
import { Box, Title } from 'ui'

const Tabs = () => {
  const history = useHistory()
  const url = window.location.pathname

  const tabs = [
    { name: 'Conta', slug: 'account' },
    { name: 'Histórico', slug: 'history' },
    { name: 'Controle', slug: 'control' },
  ]

  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      className="tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab.slug}
          onClick={() => history.push('/app/' + tab.slug)}
          className={url.includes(tab.slug) ? 'active' : ''}
          style={{ paddingTop: theme.space.sm, paddingBottom: theme.space.sm }}
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
          bottom: 5px;
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
