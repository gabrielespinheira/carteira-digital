import React from 'react'

import { Box, NavBack, Title, Image } from 'ui'
import { useData } from 'hooks'

const Topbar = ({ clickNav, navHidden = true }) => {
  const { user } = useData()

  if (!user) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingBottom="xxs"
    >
      {!navHidden ? (
        <NavBack onClick={clickNav} hidden={navHidden} />
      ) : (
        <Title fontSize="md">{user?.name}</Title>
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
