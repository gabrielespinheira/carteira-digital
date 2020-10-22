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
import * as Icon from 'react-icons/fi'

const ButtonStyled = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}
`

const Button = ({ title, children, icon = null, ...props }) => {
  const FeatherIcon = Icon[icon]
  return (
    <ButtonStyled
      bg="blue"
      borderRadius="12px"
      border="none"
      color="white"
      height="52px"
      minWidth="256px"
      fontSize="sm"
      {...props}
    >
      {icon && <FeatherIcon size={24} style={{ marginRight: '15px' }} />}
      {title}
      {children}
    </ButtonStyled>
  )
}

export default Button
