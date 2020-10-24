import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'

import Routes from './routes'
import { DataProvider } from 'hooks/useData'
import { DatabaseProvider } from 'hooks/useDB'
import { Loading } from 'components'

import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

WebFont.load({
  google: {
    families: ['Poppins:300,400,500,600,700', 'sans-serif'],
  },
})

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
