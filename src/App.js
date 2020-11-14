import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import WebFont from 'webfontloader'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </ThemeProvider>
        </DataProvider>
      </DatabaseProvider>
    </Suspense>
  )
}

export default App
