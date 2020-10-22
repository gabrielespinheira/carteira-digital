import React from 'react'

import { Box } from 'ui'

const Content = ({ children, ...props }) => {
  return (
    <Box flex="1" overflow="hidden" overflowY="scroll" {...props}>
      {children}
    </Box>
  )
}

export default Content
