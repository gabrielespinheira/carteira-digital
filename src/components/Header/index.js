import React from 'react'

import { Box, Logo, NavBack } from 'ui'

const Header = ({ clickNav, navHidden = false }) => {
  return (
    <Box width="100%" flexDirection={navHidden ? 'column' : 'row'}>
      <NavBack onClick={clickNav} hidden={navHidden} />
      <Logo
        justifyContent="center"
        ml="auto"
        mr={navHidden && 'auto'}
        mt={navHidden && 'xl'}
      />
    </Box>
  )
}

export default Header
