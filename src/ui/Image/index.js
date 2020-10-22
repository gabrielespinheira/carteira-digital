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

const ImageStyled = styled('img')`
  ${space}
  ${layout}
  ${flexbox}
  ${color}
  ${typography}
  ${border}
`

const Image = ({ ...props }) => {
  return <ImageStyled {...props} />
}

export default Image
