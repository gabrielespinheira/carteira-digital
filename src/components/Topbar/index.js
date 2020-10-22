import React from 'react'

import { Box, NavBack, Title, Image } from 'ui'
import { useData } from 'hooks'

const Topbar = ({ clickNav, navHidden = true }) => {
  const { user } = useData()

  if (!user) {
    return <></>
  }

  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingTop="xs"
      paddingBottom="xs"
    >
      {!navHidden ? (
        <NavBack onClick={clickNav} hidden={navHidden} />
      ) : (
        <Title fontSize="lg">{user?.name}</Title>
      )}
      {user.avatar && (
        <Image
          src={user.avatar}
          width="64px"
          height="64px"
          borderRadius="50%"
        />
      )}
    </Box>
  )
}

export default Topbar
