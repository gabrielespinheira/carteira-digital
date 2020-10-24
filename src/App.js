import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import { DataProvider } from 'hooks/useData'
import { DatabaseProvider } from 'hooks/useDB'
import { Loading } from 'components'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <DatabaseProvider>
        <DataProvider>
          <ThemeProvider theme={theme}>
            <Routes />

            <GlobalStyle />
          </ThemeProvider>
        </DataProvider>
      </DatabaseProvider>
    </Suspense>
  )
}

export default App
