import React from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  flexbox,
  color,
  typography,
  border,
} from 'styled-system'

const BoxStyled = styled('div')`
  display: flex;
  flex-direction: column;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}
`

const Box = ({ children, ...props }) => {
  return <BoxStyled {...props}>{children}</BoxStyled>
}

export default Box
