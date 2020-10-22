import React from 'react'

import { Container, Box } from 'ui'

const Layout = ({ children, title = 'Carteira Digital', ...props }) => {
  return (
    <Container backgroundColor="white">
      <Box width="100%" padding="md" height="100%" {...props}>
        {children}
      </Box>
    </Container>
  )
}

export default Layout
