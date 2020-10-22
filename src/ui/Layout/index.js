import React from 'react'
import Head from 'next/head'

import { Container, Box } from 'ui'

const Layout = ({ children, title = 'Carteira Digital', ...props }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container backgroundColor="white">
        <Box width="100%" padding="md" height="100%" {...props}>
          {children}
        </Box>
      </Container>
    </>
  )
}

export default Layout
