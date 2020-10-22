import React from 'react'
import styled from 'styled-components'
import {
  flexbox,
  space,
  layout,
  color,
  typography,
  border,
} from 'styled-system'
import { FiArrowLeft } from 'react-icons/fi'
import theme from 'styles/theme'

const NavBackStyled = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
`

const NavBack = ({ onClick, hidden = false, children, ...props }) => {
  const stateStyle = hidden ? { visibility: 'hidden' } : {}

  return (
    <NavBackStyled
      width="50px"
      height="50px"
      borderRadius="50%"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="gray"
      bg="transparent"
      onClick={onClick}
      style={stateStyle}
      {...props}
    >
      <FiArrowLeft size={24} color={theme.colors.black} />
    </NavBackStyled>
  )
}

export default NavBack
