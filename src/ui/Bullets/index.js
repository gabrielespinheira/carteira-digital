import React from 'react'
import styled from 'styled-components'
import { flexbox, space, layout, color, border } from 'styled-system'

import { Box } from 'ui'

const BulletElement = styled('div')(flexbox, space, layout, color, border)

const Bullets = ({ quantity, active, hidden = false, ...props }) => {
  const stateStyle = hidden ? { visibility: 'hidden' } : {}

  if (!quantity || !active) {
    return null
  }

  let options = []

  for (var i = 1; i <= quantity; i++) {
    options.push(
      <BulletElement
        className="bullet"
        key={i}
        bg={active === i ? 'black' : 'gray'}
        width={active === i ? '24px' : '8px'}
        height="8px"
        borderRadius="5px"
        ml="4px"
        mr="4px"
      />
    )
  }

  return (
    <Box flexDirection="row" ml="auto" mr="auto" style={stateStyle} {...props}>
      {options}
    </Box>
  )
}

export default Bullets
