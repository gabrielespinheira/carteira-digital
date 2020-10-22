import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import { DataProvider } from 'hooks/useData'
import { DatabaseProvider } from 'hooks/useDB'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <DatabaseProvider>
      <DataProvider>
        <ThemeProvider theme={theme}>
          <Routes />

          <GlobalStyle />
        </ThemeProvider>
      </DataProvider>
    </DatabaseProvider>
  )
}

export default App
