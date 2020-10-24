import React from 'react'

import { Box } from 'ui'

const BoxGray = ({ onClick, children, ...props }) => {
  return (
    <Box
      bg="lightgray"
      borderRadius="md"
      justifyContent="center"
      p="xs"
      minHeight="134px"
      onClick={onClick}
      {...props}
    >
      {children}
    </Box>
  )
}

export default BoxGray
