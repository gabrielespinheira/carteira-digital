import React from 'react'

import { Box } from 'ui'

const BoxGray = ({ children, ...props }) => {
  return (
    <Box
      bg="lightgray"
      borderRadius="md"
      justifyContent="center"
      p="xs"
      minHeight="134px"
      {...props}
    >
      {children}
    </Box>
  )
}

export default BoxGray
