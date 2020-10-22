import React from 'react'

import { ReactComponent as Vector } from 'assets/img/logo.svg'
import { Box } from 'ui'

const Logo = ({ ...props }) => {
  return (
    <Box {...props}>
      <Vector />
    </Box>
  )
}

export default Logo
